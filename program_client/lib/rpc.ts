// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

import * as pda from "./pda";
import * as T from "./types";
import {
    Commitment,
    Connection,
    GetAccountInfoConfig,
    Keypair,
    PublicKey,
    sendAndConfirmTransaction,
    SystemProgram,
    Transaction,
    TransactionInstruction,
    TransactionSignature,
} from "@solana/web3.js";
import {deserialize, serialize} from "borsh";


let _programId: PublicKey;
let _connection: Connection;

export const initializeClient = (
    programId: PublicKey,
    connection: Connection
) => {
    _programId = programId;
    _connection = connection;
};

export enum RiseinCertificationInstruction {
/**
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` mint: {@link Mint} 
 * 2. `[writable]` certificate: {@link CertificateMetadata} 
 * 3. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 4. `[writable, signer]` funding: {@link PublicKey} Funding account (must be a system account)
 * 5. `[writable]` assoc_token_account: {@link PublicKey} Associated token account address to be created
 * 6. `[]` wallet: {@link PublicKey} Wallet address for the new associated token account
 * 7. `[]` token_program: {@link PublicKey} SPL Token program
 * 8. `[signer]` owner: {@link PublicKey} The mint's minting authority.
 * 9. `[]` csl_spl_token_v_0_0_0: {@link PublicKey} Auto-generated, CslSplTokenProgram v0.0.0
 * 10. `[]` csl_spl_assoc_token_v_0_0_0: {@link PublicKey} Auto-generated, CslSplAssocTokenProgram v0.0.0
 *
 * Data:
 * - project_name: {@link string} 
 * - my_name: {@link string} 
 * - image_link: {@link string} 
 * - course_description: {@link string} 
 */
    MintCertification = 0,

/**
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` claim: {@link Mint} 
 * 2. `[writable]` certificate: {@link CertificateMetadata} 
 * 3. `[writable, signer]` funding: {@link PublicKey} Funding account (must be a system account)
 * 4. `[writable]` assoc_token_account: {@link PublicKey} Associated token account address to be created
 * 5. `[]` wallet: {@link PublicKey} Wallet address for the new associated token account
 * 6. `[]` mint: {@link Mint} The token mint for the new associated token account
 * 7. `[]` system_program: {@link PublicKey} System program
 * 8. `[]` token_program: {@link PublicKey} SPL Token program
 * 9. `[writable]` source: {@link PublicKey} The source account.
 * 10. `[writable]` destination: {@link PublicKey} The destination account.
 * 11. `[signer]` authority: {@link PublicKey} The source account's owner/delegate.
 * 12. `[]` csl_spl_assoc_token_v_0_0_0: {@link PublicKey} Auto-generated, CslSplAssocTokenProgram v0.0.0
 * 13. `[]` csl_spl_token_v_0_0_0: {@link PublicKey} Auto-generated, CslSplTokenProgram v0.0.0
 */
    ClaimCertification = 1,

/**
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` mint: {@link Mint} 
 * 2. `[writable]` certificate: {@link CertificateMetadata} 
 * 3. `[writable, signer]` funding: {@link PublicKey} Funding account (must be a system account)
 * 4. `[writable]` assoc_token_account: {@link PublicKey} Associated token account address to be created
 * 5. `[]` wallet: {@link PublicKey} Wallet address for the new associated token account
 * 6. `[]` system_program: {@link PublicKey} System program
 * 7. `[]` token_program: {@link PublicKey} SPL Token program
 * 8. `[writable]` source: {@link PublicKey} The source account.
 * 9. `[writable]` destination: {@link PublicKey} The destination account.
 * 10. `[signer]` authority: {@link PublicKey} The source account's owner/delegate.
 * 11. `[]` csl_spl_assoc_token_v_0_0_0: {@link PublicKey} Auto-generated, CslSplAssocTokenProgram v0.0.0
 * 12. `[]` csl_spl_token_v_0_0_0: {@link PublicKey} Auto-generated, CslSplTokenProgram v0.0.0
 */
    TransferCertification = 2,

/**
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` mint: {@link Mint} 
 * 2. `[writable]` certificate: {@link CertificateMetadata} 
 * 3. `[writable]` account: {@link Account} The account to burn from.
 * 4. `[signer]` owner: {@link PublicKey} The account's owner/delegate.
 * 5. `[]` wallet: {@link PublicKey} Wallet address for the new associated token account
 * 6. `[]` token_program: {@link PublicKey} SPL Token program
 * 7. `[]` csl_spl_token_v_0_0_0: {@link PublicKey} Auto-generated, CslSplTokenProgram v0.0.0
 */
    BurnCertification = 3,
}

export type MintCertificationArgs = {
    feePayer: PublicKey;
    mint: PublicKey;
    funding: PublicKey;
    assocTokenAccount: PublicKey;
    wallet: PublicKey;
    owner: PublicKey;
    projectName: string;
    myName: string;
    imageLink: string;
    courseDescription: string;
};


/**
 * ### Returns a {@link TransactionInstruction}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` mint: {@link Mint} 
 * 2. `[writable]` certificate: {@link CertificateMetadata} 
 * 3. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 4. `[writable, signer]` funding: {@link PublicKey} Funding account (must be a system account)
 * 5. `[writable]` assoc_token_account: {@link PublicKey} Associated token account address to be created
 * 6. `[]` wallet: {@link PublicKey} Wallet address for the new associated token account
 * 7. `[]` token_program: {@link PublicKey} SPL Token program
 * 8. `[signer]` owner: {@link PublicKey} The mint's minting authority.
 * 9. `[]` csl_spl_token_v_0_0_0: {@link PublicKey} Auto-generated, CslSplTokenProgram v0.0.0
 * 10. `[]` csl_spl_assoc_token_v_0_0_0: {@link PublicKey} Auto-generated, CslSplAssocTokenProgram v0.0.0
 *
 * Data:
 * - project_name: {@link string} 
 * - my_name: {@link string} 
 * - image_link: {@link string} 
 * - course_description: {@link string} 
 */
export const mintCertification = (args: MintCertificationArgs): TransactionInstruction => {
    const data = serialize(
        {
            struct: {
                id: "u8",
                project_name: "string",
                my_name: "string",
                image_link: "string",
                course_description: "string",
            },
        },
        {
            id: RiseinCertificationInstruction.MintCertification,
            project_name: args.projectName,
            my_name: args.myName,
            image_link: args.imageLink,
            course_description: args.courseDescription,
        }
    );

    const [certificatePubkey] = pda.deriveCertificateMetadataPDA({
        mint: args.mint,
    }, _programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: args.mint, isSigner: true, isWritable: true},
            {pubkey: certificatePubkey, isSigner: false, isWritable: true},
            {pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            {pubkey: args.funding, isSigner: true, isWritable: true},
            {pubkey: args.assocTokenAccount, isSigner: false, isWritable: true},
            {pubkey: args.wallet, isSigner: false, isWritable: false},
            {pubkey: new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"), isSigner: false, isWritable: false},
            {pubkey: args.owner, isSigner: true, isWritable: false},
            {pubkey: new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"), isSigner: false, isWritable: false},
            {pubkey: new PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"), isSigner: false, isWritable: false},
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable, signer]` mint: {@link Mint} 
 * 2. `[writable]` certificate: {@link CertificateMetadata} 
 * 3. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 * 4. `[writable, signer]` funding: {@link PublicKey} Funding account (must be a system account)
 * 5. `[writable]` assoc_token_account: {@link PublicKey} Associated token account address to be created
 * 6. `[]` wallet: {@link PublicKey} Wallet address for the new associated token account
 * 7. `[]` token_program: {@link PublicKey} SPL Token program
 * 8. `[signer]` owner: {@link PublicKey} The mint's minting authority.
 * 9. `[]` csl_spl_token_v_0_0_0: {@link PublicKey} Auto-generated, CslSplTokenProgram v0.0.0
 * 10. `[]` csl_spl_assoc_token_v_0_0_0: {@link PublicKey} Auto-generated, CslSplAssocTokenProgram v0.0.0
 *
 * Data:
 * - project_name: {@link string} 
 * - my_name: {@link string} 
 * - image_link: {@link string} 
 * - course_description: {@link string} 
 */
export const mintCertificationSendAndConfirm = async (
    args: Omit<MintCertificationArgs, "feePayer" |"mint" |"funding" |"owner"> & { 
        signers: { feePayer: Keypair,  mint: Keypair,  funding: Keypair,  owner: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(mintCertification({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
        mint: args.signers.mint.publicKey,
        funding: args.signers.funding.publicKey,
        owner: args.signers.owner.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, args.signers.mint, args.signers.funding, args.signers.owner, ]
    );
};

export type ClaimCertificationArgs = {
    feePayer: PublicKey;
    claim: PublicKey;
    funding: PublicKey;
    assocTokenAccount: PublicKey;
    wallet: PublicKey;
    mint: PublicKey;
    source: PublicKey;
    destination: PublicKey;
    authority: PublicKey;
};


/**
 * ### Returns a {@link TransactionInstruction}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` claim: {@link Mint} 
 * 2. `[writable]` certificate: {@link CertificateMetadata} 
 * 3. `[writable, signer]` funding: {@link PublicKey} Funding account (must be a system account)
 * 4. `[writable]` assoc_token_account: {@link PublicKey} Associated token account address to be created
 * 5. `[]` wallet: {@link PublicKey} Wallet address for the new associated token account
 * 6. `[]` mint: {@link Mint} The token mint for the new associated token account
 * 7. `[]` system_program: {@link PublicKey} System program
 * 8. `[]` token_program: {@link PublicKey} SPL Token program
 * 9. `[writable]` source: {@link PublicKey} The source account.
 * 10. `[writable]` destination: {@link PublicKey} The destination account.
 * 11. `[signer]` authority: {@link PublicKey} The source account's owner/delegate.
 * 12. `[]` csl_spl_assoc_token_v_0_0_0: {@link PublicKey} Auto-generated, CslSplAssocTokenProgram v0.0.0
 * 13. `[]` csl_spl_token_v_0_0_0: {@link PublicKey} Auto-generated, CslSplTokenProgram v0.0.0
 */
export const claimCertification = (args: ClaimCertificationArgs): TransactionInstruction => {
    const data = serialize(
        {
            struct: {
                id: "u8",
            },
        },
        {
            id: RiseinCertificationInstruction.ClaimCertification,
        }
    );

    const [certificatePubkey] = pda.deriveCertificateMetadataPDA({
        mint: args.claim,
    }, _programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: args.claim, isSigner: false, isWritable: false},
            {pubkey: certificatePubkey, isSigner: false, isWritable: true},
            {pubkey: args.funding, isSigner: true, isWritable: true},
            {pubkey: args.assocTokenAccount, isSigner: false, isWritable: true},
            {pubkey: args.wallet, isSigner: false, isWritable: false},
            {pubkey: args.mint, isSigner: false, isWritable: false},
            {pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            {pubkey: new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"), isSigner: false, isWritable: false},
            {pubkey: args.source, isSigner: false, isWritable: true},
            {pubkey: args.destination, isSigner: false, isWritable: true},
            {pubkey: args.authority, isSigner: true, isWritable: false},
            {pubkey: new PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"), isSigner: false, isWritable: false},
            {pubkey: new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"), isSigner: false, isWritable: false},
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` claim: {@link Mint} 
 * 2. `[writable]` certificate: {@link CertificateMetadata} 
 * 3. `[writable, signer]` funding: {@link PublicKey} Funding account (must be a system account)
 * 4. `[writable]` assoc_token_account: {@link PublicKey} Associated token account address to be created
 * 5. `[]` wallet: {@link PublicKey} Wallet address for the new associated token account
 * 6. `[]` mint: {@link Mint} The token mint for the new associated token account
 * 7. `[]` system_program: {@link PublicKey} System program
 * 8. `[]` token_program: {@link PublicKey} SPL Token program
 * 9. `[writable]` source: {@link PublicKey} The source account.
 * 10. `[writable]` destination: {@link PublicKey} The destination account.
 * 11. `[signer]` authority: {@link PublicKey} The source account's owner/delegate.
 * 12. `[]` csl_spl_assoc_token_v_0_0_0: {@link PublicKey} Auto-generated, CslSplAssocTokenProgram v0.0.0
 * 13. `[]` csl_spl_token_v_0_0_0: {@link PublicKey} Auto-generated, CslSplTokenProgram v0.0.0
 */
export const claimCertificationSendAndConfirm = async (
    args: Omit<ClaimCertificationArgs, "feePayer" |"funding" |"authority"> & { 
        signers: { feePayer: Keypair,  funding: Keypair,  authority: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(claimCertification({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
        funding: args.signers.funding.publicKey,
        authority: args.signers.authority.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, args.signers.funding, args.signers.authority, ]
    );
};

export type TransferCertificationArgs = {
    feePayer: PublicKey;
    mint: PublicKey;
    funding: PublicKey;
    assocTokenAccount: PublicKey;
    wallet: PublicKey;
    source: PublicKey;
    destination: PublicKey;
    authority: PublicKey;
};


/**
 * ### Returns a {@link TransactionInstruction}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` mint: {@link Mint} 
 * 2. `[writable]` certificate: {@link CertificateMetadata} 
 * 3. `[writable, signer]` funding: {@link PublicKey} Funding account (must be a system account)
 * 4. `[writable]` assoc_token_account: {@link PublicKey} Associated token account address to be created
 * 5. `[]` wallet: {@link PublicKey} Wallet address for the new associated token account
 * 6. `[]` system_program: {@link PublicKey} System program
 * 7. `[]` token_program: {@link PublicKey} SPL Token program
 * 8. `[writable]` source: {@link PublicKey} The source account.
 * 9. `[writable]` destination: {@link PublicKey} The destination account.
 * 10. `[signer]` authority: {@link PublicKey} The source account's owner/delegate.
 * 11. `[]` csl_spl_assoc_token_v_0_0_0: {@link PublicKey} Auto-generated, CslSplAssocTokenProgram v0.0.0
 * 12. `[]` csl_spl_token_v_0_0_0: {@link PublicKey} Auto-generated, CslSplTokenProgram v0.0.0
 */
export const transferCertification = (args: TransferCertificationArgs): TransactionInstruction => {
    const data = serialize(
        {
            struct: {
                id: "u8",
            },
        },
        {
            id: RiseinCertificationInstruction.TransferCertification,
        }
    );

    const [certificatePubkey] = pda.deriveCertificateMetadataPDA({
        mint: args.mint,
    }, _programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: args.mint, isSigner: false, isWritable: false},
            {pubkey: certificatePubkey, isSigner: false, isWritable: true},
            {pubkey: args.funding, isSigner: true, isWritable: true},
            {pubkey: args.assocTokenAccount, isSigner: false, isWritable: true},
            {pubkey: args.wallet, isSigner: false, isWritable: false},
            {pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
            {pubkey: new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"), isSigner: false, isWritable: false},
            {pubkey: args.source, isSigner: false, isWritable: true},
            {pubkey: args.destination, isSigner: false, isWritable: true},
            {pubkey: args.authority, isSigner: true, isWritable: false},
            {pubkey: new PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"), isSigner: false, isWritable: false},
            {pubkey: new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"), isSigner: false, isWritable: false},
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` mint: {@link Mint} 
 * 2. `[writable]` certificate: {@link CertificateMetadata} 
 * 3. `[writable, signer]` funding: {@link PublicKey} Funding account (must be a system account)
 * 4. `[writable]` assoc_token_account: {@link PublicKey} Associated token account address to be created
 * 5. `[]` wallet: {@link PublicKey} Wallet address for the new associated token account
 * 6. `[]` system_program: {@link PublicKey} System program
 * 7. `[]` token_program: {@link PublicKey} SPL Token program
 * 8. `[writable]` source: {@link PublicKey} The source account.
 * 9. `[writable]` destination: {@link PublicKey} The destination account.
 * 10. `[signer]` authority: {@link PublicKey} The source account's owner/delegate.
 * 11. `[]` csl_spl_assoc_token_v_0_0_0: {@link PublicKey} Auto-generated, CslSplAssocTokenProgram v0.0.0
 * 12. `[]` csl_spl_token_v_0_0_0: {@link PublicKey} Auto-generated, CslSplTokenProgram v0.0.0
 */
export const transferCertificationSendAndConfirm = async (
    args: Omit<TransferCertificationArgs, "feePayer" |"funding" |"authority"> & { 
        signers: { feePayer: Keypair,  funding: Keypair,  authority: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(transferCertification({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
        funding: args.signers.funding.publicKey,
        authority: args.signers.authority.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, args.signers.funding, args.signers.authority, ]
    );
};

export type BurnCertificationArgs = {
    feePayer: PublicKey;
    mint: PublicKey;
    owner: PublicKey;
    wallet: PublicKey;
};


/**
 * ### Returns a {@link TransactionInstruction}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` mint: {@link Mint} 
 * 2. `[writable]` certificate: {@link CertificateMetadata} 
 * 3. `[writable]` account: {@link Account} The account to burn from.
 * 4. `[signer]` owner: {@link PublicKey} The account's owner/delegate.
 * 5. `[]` wallet: {@link PublicKey} Wallet address for the new associated token account
 * 6. `[]` token_program: {@link PublicKey} SPL Token program
 * 7. `[]` csl_spl_token_v_0_0_0: {@link PublicKey} Auto-generated, CslSplTokenProgram v0.0.0
 */
export const burnCertification = (args: BurnCertificationArgs): TransactionInstruction => {
    const data = serialize(
        {
            struct: {
                id: "u8",
            },
        },
        {
            id: RiseinCertificationInstruction.BurnCertification,
        }
    );

    const [certificatePubkey] = pda.deriveCertificateMetadataPDA({
        mint: args.mint,
    }, _programId);
    const [accountPubkey] = pda.CslSplTokenPDAs.deriveAccountPDA({
        wallet: args.wallet,
        tokenProgram: new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"),
        mint: args.mint,
    }, );

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: args.mint, isSigner: false, isWritable: true},
            {pubkey: certificatePubkey, isSigner: false, isWritable: true},
            {pubkey: accountPubkey, isSigner: false, isWritable: true},
            {pubkey: args.owner, isSigner: true, isWritable: false},
            {pubkey: args.wallet, isSigner: false, isWritable: false},
            {pubkey: new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"), isSigner: false, isWritable: false},
            {pubkey: new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"), isSigner: false, isWritable: false},
        ],
        programId: _programId,
    });
};

/**
 * ### Returns a {@link TransactionSignature}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` mint: {@link Mint} 
 * 2. `[writable]` certificate: {@link CertificateMetadata} 
 * 3. `[writable]` account: {@link Account} The account to burn from.
 * 4. `[signer]` owner: {@link PublicKey} The account's owner/delegate.
 * 5. `[]` wallet: {@link PublicKey} Wallet address for the new associated token account
 * 6. `[]` token_program: {@link PublicKey} SPL Token program
 * 7. `[]` csl_spl_token_v_0_0_0: {@link PublicKey} Auto-generated, CslSplTokenProgram v0.0.0
 */
export const burnCertificationSendAndConfirm = async (
    args: Omit<BurnCertificationArgs, "feePayer" |"owner"> & { 
        signers: { feePayer: Keypair,  owner: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(burnCertification({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
        owner: args.signers.owner.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, args.signers.owner, ]
    );
};

// Getters

export const getCertificateMetadata = async (
    publicKey: PublicKey,
    commitmentOrConfig: Commitment | GetAccountInfoConfig | undefined = "processed"
): Promise<T.CertificateMetadata | undefined> => {
    const buffer = await _connection.getAccountInfo(publicKey, commitmentOrConfig);

    if (!buffer) {
        return undefined
    }

    if (buffer.data.length <= 0) {
        return undefined
    }

    return T.decodeCertificateMetadata(deserialize(T.CertificateMetadataSchema, buffer.data) as Record<string, unknown>);
}
export module CslSplTokenGetters {
    export const getMint = async (
        publicKey: PublicKey,
        commitmentOrConfig: Commitment | GetAccountInfoConfig | undefined = "processed"
    ): Promise<T.CslSplTokenTypes.Mint | undefined> => {
        const buffer = await _connection.getAccountInfo(publicKey, commitmentOrConfig);
    
        if (!buffer) {
            return undefined
        }
    
        if (buffer.data.length <= 0) {
            return undefined
        }
    
        return T.CslSplTokenTypes.decodeMint(deserialize(T.CslSplTokenTypes.MintSchema, buffer.data) as Record<string, unknown>);
    }
    
    export const getAccount = async (
        publicKey: PublicKey,
        commitmentOrConfig: Commitment | GetAccountInfoConfig | undefined = "processed"
    ): Promise<T.CslSplTokenTypes.Account | undefined> => {
        const buffer = await _connection.getAccountInfo(publicKey, commitmentOrConfig);
    
        if (!buffer) {
            return undefined
        }
    
        if (buffer.data.length <= 0) {
            return undefined
        }
    
        return T.CslSplTokenTypes.decodeAccount(deserialize(T.CslSplTokenTypes.AccountSchema, buffer.data) as Record<string, unknown>);
    }
}



// Websocket Events

