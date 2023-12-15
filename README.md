# NFT Certificate Solana Smart Contract

**The RiseIn Certification Smart Contract is a Solana blockchain-based system for creating, minting, and managing Non-Fungible Token (NFT) certifications. This smart contract enables users to mint unique digital certificates, claim them to their associated token accounts, transfer them to other wallets, and even burn them if needed..**



# Deployment of Solana Program 
```CIDL
cidl: "0.8"
info:
  name: risein_certification
  title: final_project
  version: 0.0.1
  license:
    name: Unlicense
    identifier: Unlicense
types:
  CertificateMetadata:
    solana:
      seeds:
        - name: "certificate"
        - name: mint
          type: sol:pubkey
    fields:
      - name: project_naame
        type: string
        solana:
          attributes: [ cap:16]
      - name: my_name
        type: string
        solana:
          attributes: [cap:16]
      - name: course_description
        type: string
        solana:
          attributes: [cap:255]
      - name: image_link
        type: rs:option<string>
        solana:
          attributes: [ cap:96 ]
      - name: mint
        type: sol:pubkey
      - name: assoc_account
        type: rs:option<sol:pubkey>
methods:
  - name: mint_certification
    uses:
      - csl_spl_token.initialize_mint2
      - csl_spl_assoc_token.create
      - csl_spl_token.mint_to
      - csl_spl_token.set_authority
    inputs:
      - name: mint
        type: csl_spl_token.Mint
        solana:
          attributes: [ init ]
      - name: certificate
        type: CertificateMetadata
        solana:
          attributes: [ init ]
          seeds:
            mint: mint
      - name: project_name
        type: string
      - name: my_name
        type: string
      - name: image_link
        type: string
      - name: course_description
        type: string 
  - name: claim_certification
    uses:
      - csl_spl_assoc_token.create
      - csl_spl_token.transfer_checked
    inputs:
      - name: claim
        type: csl_spl_token.Mint
      - name: certificate
        type: CertificateMetadata
        solana:
          attributes: [mut]
          seeds:
            mint: claim 
  - name: transfer_certification
    uses:
      - csl_spl_assoc_token.create
      - csl_spl_token.transfer_checked
    inputs:
      - name: mint
        type: csl_spl_token.Mint
      - name: certificate
        type: CertificateMetadata
        solana:
          attributes: [ mut ]
          seeds:
            mint: mint
  - name: burn_certification
    uses:
      - csl_spl_token.burn
    inputs:
      - name: mint
        type: csl_spl_token.Mint
      - name: certificate
        type: CertificateMetadata
        solana:
          attributes: [ mut ]
          seeds:
            mint: mint
```


# To generate code using this command

```CLI command
    codigo solana generate finalProject.yaml
```


# Functions of this contract terms

**Mint Certification:** You can use this contract to Mint the certificate. code below
```javascript code logic

    // Implementing my business logic here...

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
```

**Claim NFT Certificates:** You can use this contract to claim the certificate. code below
```javascript code logic
    // Implementing my business logic here...
   certificate.data.assoc_account = Some(*destination.key);

    if assoc_token_account.lamports() == 0 {
        csl_spl_assoc_token::src::cpi::create(for_create)?;
    }

    csl_spl_token::src::cpi::transfer_checked(for_transfer_checked, 1, 0)?;

    Ok(())
```

**Transfer NFT Certificates:** this transfers the NFT.
```javascript code logic
    // Implementing my business logic here...
    certificate.data.assoc_account = Some(*destination.key);

    if assoc_token_account.lamports() == 0 {
        csl_spl_assoc_token::src::cpi::create(for_create)?;
    }

    csl_spl_token::src::cpi::transfer_checked(for_transfer_checked, 1, 0)?;
    Ok(())
```

**Burn NFT Certificates:** NFT certificates can be burned with this. code below
```javascript code logic
  // Implementing my business logic here...
 certificate.data.assoc_account = None;
    csl_spl_token::src::cpi::burn(for_burn, 1)?;
    Ok(())
```




# Build Solana program using command

```CLI command
   cd program 
   cargo build-sbf

```

# Setup the Solana devne config file 

```CLI command
solana config set --url devnet
```

#  Deploy your program using the following command:
```CLI command
solana program deploy target/deploy/rise_in.so 

```


# Installing the required dependencies
```CLI command
cd program_client
 yarn add @solana/spl-token ts-node
```

# Running the app.ts

```CLI command
 npx ts-node app.ts <program ID>
```

**Resources:** <br> 

[Solana](https://solana.com/)<br> 
[Solana Labs](https://github.com/solana-labs)<br> 
[Codigo](https://docs.codigo.ai/)<br> 
