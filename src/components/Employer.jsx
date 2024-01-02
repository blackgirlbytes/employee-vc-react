import { useState } from 'react';
import { VerifiableCredential } from '@web5/credentials';
import { DidDhtMethod } from '@web5/dids';

export default function Employer() {
    const [vcJwt, setVcJwt] = useState('');
    const [employeeDid, setEmployeeDid] = useState('');

    const issueCredential = async () => {
        const employerDid = await DidDhtMethod.create();

        class EmploymentCredential {
            constructor(position, startDate, employmentStatus) {
                this.position = position;
                this.startDate = startDate;
                this.employmentStatus = employmentStatus;
            }
        }

        const vc = await VerifiableCredential.create({
            type: 'EmploymentCredential',
            issuer: employerDid,
            subject: employeeDid,
            expirationDate: '2023-09-30T12:34:56Z',
            data: new EmploymentCredential('Software Developer', '2023-04-01T12:34:56Z', 'Contractor')
        });

        const signedVcJwt = await vc.sign({ did: employerDid });
        setVcJwt(signedVcJwt);
    };

    return (
        <div>
            <h1>Employer</h1>
            <input
                type="text"
                placeholder="Enter Employee DID"
                value={employeeDid}
                onChange={(e) => setEmployeeDid(e.target.value)}
            />
            <button onClick={issueCredential}>Issue Credential</button>
            {vcJwt && <div><strong>Signed VC JWT:</strong> {vcJwt}</div>}
        </div>
    );
}
