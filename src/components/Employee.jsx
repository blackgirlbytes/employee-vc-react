import { useState, useEffect } from 'react';
import { DidDhtMethod } from '@web5/dids';

export default function Employee() {
    const [employeeDid, setEmployeeDid] = useState('');
    const [vcJwt, setVcJwt] = useState('');

    useEffect(() => {
        const createDid = async () => {
            const didObject = await DidDhtMethod.create();
            setEmployeeDid(didObject.did);
        };

        createDid();
    }, []);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(employeeDid);
        alert('DID copied to clipboard!');
    };

    return (
        <div>
            <h1>Employee</h1>
            {employeeDid && (
                <div>
                    <strong>Your DID:</strong> {employeeDid}
                    <button onClick={copyToClipboard}>Copy DID</button>
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
