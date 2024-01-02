import { useState } from "react";
import { DidDhtMethod } from "@web5/dids";

export default function Employee() {
  const [employeeDid, setEmployeeDid] = useState("");
  const [vcJwt, setVcJwt] = useState("");

  const handleCreateDid = async () => {
    const didObject = await DidDhtMethod.create();
    setEmployeeDid(didObject.did);
  };

  // Rest of your component code...

  return (
    <div>
      <h1>Employee</h1>
      {!employeeDid && <button onClick={handleCreateDid}>Create DID</button>}
      {employeeDid && (
        <div>
          <strong>Your DID:</strong> {employeeDid}
        </div>
      )}
      <input
        type="text"
        placeholder="Enter VC JWT here"
        value={vcJwt}
        onChange={(e) => setVcJwt(e.target.value)}
      />
    </div>
  );
}
