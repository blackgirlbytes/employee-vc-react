import { useState, useEffect } from 'react';
// import { DidDhtMethod } from '@web5/dids';

export default function Employee() {

   const employeeDid = "did:web:u0x1b.5g6.2g3.4g5"
    return (
        <div>
            <h1>Employee</h1>
            {employeeDid && (
                <div>
                    <strong>Your DID:</strong> {employeeDid}
                    {/* <button onClick={copyToClipboard}>Copy DID</button> */}
                </div>
            )}
            <input
                type="text"
                placeholder="Enter VC JWT here"
                value={vcJwt}
                onChange={(e) => setVcJwt(e.target.value)}
            />
            {vcJwt && <div><strong>Received VC JWT:</strong> {vcJwt}</div>}
        </div>
    );
}
