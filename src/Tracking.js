const soapRequest = `
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <TrackArticle xmlns="http://tempuri.org/">
      <ArticleId>${"UMS64043764"}</ArticleId>
      <ResType>"android"</ResType>
    </TrackArticle>
  </soap:Body>
</soap:Envelope>
`;

fetch("https://emtts.dakkhana.com.pk/MobileAppSOAP/EPTracklive.asmx", {
  method: "POST",
  headers: {
    "Content-Type": "text/xml; charset=utf-8",
    SOAPAction: "http://tempuri.org/TrackArticle",
  },
  body: soapRequest,
})
  .then((response) => response.text())
  .then((data) => {
    // Parse the XML data returned in the response
    console.log(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });