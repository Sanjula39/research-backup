import axios from "axios";
import { useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormGroup,
  FormText,
  Form,
  Input,
  Row,
  Col,
  Alert,
} from "reactstrap";
import "./Register.css";

const Register = () => {
  const [validation, setValidation] = useState("");
  const [selectedFileName, setSelectedFileName] = useState("");
  const [popup, setPopup] = useState(null);
  const [visible, setVisible] = useState(true);
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [farm, setFarm] = useState();
  const [reg, setReg] = useState();
  const [address, setAddress] = useState();
  const [cerNo, setCerNo] = useState();
  const [date, setDate] = useState();
  const [desc, setDesc] = useState();
  const [info, setInfo] = useState();
  const [file, setFile] = useState();
  const [auth, setAuth] = useState();

  const onDismiss = () => setVisible(false);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFileName(file.name);
    } else {
      setSelectedFileName(null);
    }
    const formData = new FormData();
    formData.append("file", file);

    axios
      .post("http://localhost:5000/dashboard/Register", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.data.result) {
          setValidation(response.data.result);
        } else {
          setValidation("Invalid file format");
        }
      })
      .catch((error) => {
        setValidation("File cant be uploaded");
      });
  };

  const onSaveHandler = () => {
    setPopup("Saved Suceessfully");
    setName("");
    setAddress("");
    setEmail("");
    setCerNo("");
    setDate("");
    setFarm("");
    setReg("");
    setDesc("");
    setInfo("");
    setPhone("");
    setFile("");
    setSelectedFileName("");
    setValidation("");
    window.scrollTo(0, 0);
    setTimeout(() => {
      setPopup(null);
    }, 4000);
  };

  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const onPhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const onFarmChange = (e) => {
    setFarm(e.target.value);
  };
  const onRegChange = (e) => {
    setReg(e.target.value);
  };
  const onAddressChange = (e) => {
    setAddress(e.target.value);
  };
  const onCerNOChange = (e) => {
    setCerNo(e.target.value);
  };
  const onDateChange = (e) => {
    setDate(e.target.value);
  };
  const onDescChange = (e) => {
    setDesc(e.target.value);
  };
  const onInfoChange = (e) => {
    setInfo(e.target.value);
  };
  const onAuthChange = (e) => {
    setAuth(e.target.value);
  };

  return (
    <>
      <div className="content">
        {popup && (
          <Col className="pr-md-1" md="5">
            <Alert isOpen={visible} toggle={onDismiss}>
              {popup}
            </Alert>
          </Col>
        )}

        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <h5 className="title">Register Now !</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Full Name</label>
                        <Input
                          placeholder="Name"
                          type="text"
                          onChange={onNameChange}
                          value={name}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-md-1" md="3">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <Input
                          placeholder="YourEmail@email.com"
                          type="email"
                          onChange={onEmailChange}
                          value={email}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="4">
                      <FormGroup>
                        <label>Phone Number</label>
                        <Input
                          onChange={onPhoneChange}
                          value={phone}
                          placeholder="+94xx xxxxxxx"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Farm Name</label>
                        <Input
                          placeholder="Farm"
                          type="text"
                          onChange={onFarmChange}
                          value={farm}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-md-1" md="3">
                      <FormGroup>
                        <label>Farm Registration No (if applicable)</label>
                        <Input
                          placeholder="Registration No"
                          type="text"
                          onChange={onRegChange}
                          value={reg}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Address</label>
                        <Input
                          placeholder="Farm Address"
                          type="text"
                          onChange={onAuthChange}
                          value={auth}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="4">
                      <FormGroup>
                        <label>Certification Type</label>
                        <Input placeholder="City" type="select">
                          <option>Organic Certification</option>
                          <option>Quality Standard</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col className="px-md-1" md="4">
                      <FormGroup>
                        <label>Certification Issuing Authority</label>
                        <Input
                          placeholder="Authority"
                          type="text"
                          onChange={onAddressChange}
                          value={address}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="4">
                      <FormGroup>
                        <label>Certificate No</label>
                        <Input
                          placeholder="xxxxx-xxx"
                          type="text"
                          onChange={onCerNOChange}
                          value={cerNo}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="4">
                      <FormGroup>
                        <label>Expiary Date</label>
                        <Input
                          placeholder="Date"
                          type="date"
                          onChange={onDateChange}
                          value={date}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Upload Certificates</label>
                        <Input
                          id="exampleFile"
                          name="file"
                          placeholder="upload"
                          value={file}
                          type="file"
                          onChange={handleFileChange}
                        />
                        <span style={{ padding: "10px" }}>
                          {selectedFileName || "Select File"}
                        </span>
                      </FormGroup>
                      <FormText>
                        {validation && (
                          <p>
                            Uploaded File:{" "}
                            {validation === "Genuine" ? (
                              <span style={{ color: "green" }}>
                                {" "}
                                {validation}{" "}
                              </span>
                            ) : (
                              <span style={{ color: "red" }}>
                                {validation} Sorry, this certificate is invalid.
                                Please contact our support team for
                                instructions.{" "}
                              </span>
                            )}
                          </p>
                        )}
                      </FormText>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="8">
                      <FormGroup>
                        <label>Description of Farming Practices</label>
                        <Input
                          cols="80"
                          placeholder="Here can be your description"
                          rows="4"
                          type="textarea"
                          onChange={onDescChange}
                          value={desc}
                        />
                      </FormGroup>
                      <FormGroup>
                        <label>Relevant Information</label>
                        <Input
                          cols="80"
                          placeholder="Any other relevent information"
                          rows="4"
                          type="textarea"
                          onChange={onInfoChange}
                          value={info}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button
                  className="btn-fill"
                  color="success"
                  disabled={!(validation === "Genuine")}
                  onClick={onSaveHandler}
                >
                  Save
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Register;
