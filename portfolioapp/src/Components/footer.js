import React from "react";
import { MDBContainer} from "mdbreact";

const FooterPage = () => {
  return (
      <div className="container_footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/kellykim831"> github.com/kellykim831 </a>
        </MDBContainer>
      </div>
  );
}

export default FooterPage;