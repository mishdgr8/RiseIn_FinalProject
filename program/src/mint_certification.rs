use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;

use crate::generated::state::{
	Account,
	AccountPDA,
	CertificateMetadata,
};


/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable, signer]` mint: [Mint] 
/// 2. `[writable]` certificate: [CertificateMetadata] 
/// 3. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
/// 4. `[writable, signer]` funding: [AccountInfo] Funding account (must be a system account)
/// 5. `[writable]` assoc_token_account: [AccountInfo] Associated token account address to be created
/// 6. `[]` wallet: [AccountInfo] Wallet address for the new associated token account
/// 7. `[]` token_program: [AccountInfo] SPL Token program
/// 8. `[signer]` owner: [AccountInfo] The mint's minting authority.
/// 9. `[]` csl_spl_token_v_0_0_0: [AccountInfo] Auto-generated, CslSplTokenProgram v0.0.0
/// 10. `[]` csl_spl_assoc_token_v_0_0_0: [AccountInfo] Auto-generated, CslSplAssocTokenProgram v0.0.0
///
/// Data:
/// - project_name: [String] 
/// - my_name: [String] 
/// - image_link: [String] 
/// - course_description: [String] 
pub fn mint_certification(
	program_id: &Pubkey,
	for_initialize_mint_2: &[&AccountInfo],
	for_create: &[&AccountInfo],
	for_mint_to: &[&AccountInfo],
	for_set_authority: &[&AccountInfo],
	mint: &Account<spl_token::state::Mint>,
	certificate: &mut AccountPDA<CertificateMetadata>,
	funding: &AccountInfo,
	assoc_token_account: &AccountInfo,
	wallet: &AccountInfo,
	owner: &AccountInfo,
	project_name: String,
	my_name: String,
	image_link: String,
	course_description: String,
) -> ProgramResult {
    // Implement your business logic here...

    certificate.data.project_name = project_name;
    certificate.data.my_name = my_name;
    certificate.data.course_description = course_description;
    certificate.data.image_link = Some(image_link);
    certificate.data.mint = *mint.info.key;
    certificate.data.assoc_account = Some(*assoc_token_account.key);

    // Initialize the certificate mint
    csl_spl_token::src::cpi::initialize_mint_2(for_initialize_mint_2, 0, *wallet.key, None)?;

    // Create the associated token account
    csl_spl_assoc_token::src::cpi::create(for_create)?;

    // Mint the NFT
    csl_spl_token::src::cpi::mint_to(for_mint_to, 1)?;

    // Set the authority
    csl_spl_token::src::cpi::set_authority(for_set_authority, 0, Some(*owner.key))?;
    Ok(())
}