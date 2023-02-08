import { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby';

export default async function handler(
    req: GatsbyFunctionRequest,
    res: GatsbyFunctionResponse,
) {

    if (typeof req.body !== "object") {
        req.body = JSON.parse(req.body)
    }

    const data = req.body;
    const questionResponse = `${data?.medicare ? 'Medicare,' : ''}${data?.shortTerm ? 'Short Term,' : ''}${data?.acaHealth ? 'ACA Health,' : ''}${data?.dental ? 'Dental,' : ''}${data?.supplemental ? 'Supplemental,' : ''}${data?.vision ? 'Vision' : ''}`;
    const bodyJSON = JSON.stringify({
      IndividualLead: {
        Contacts: [
          {
            Type: 'Primary',
            FirstName: data.fName,
            LastName: data.lName,
            PrimaryPhone: data.phNumber,
            ZipCode: data.zipCode,
            Email: data.email,
          },
        ],
      },
      Questions: [
        {
          Question: 'Interested Products',
          Response: questionResponse,
        },
      ],
    });
  
    try {
      const response = fetch('https://lc-api.healthmarkets.com/api/sales/internalLead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${process.env.CONTACT_FORM_AUTH_KEY}`,
        },
        body: bodyJSON,
      });
      console.log("result", req.body);
      console.log("body", bodyJSON);
      return res.status(200).json({ message: response });
    } catch (err) {
      console.log(err);
      return res.status(400).json({ message: err });
    }
}
