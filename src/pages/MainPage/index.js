import { Container,
    Badge
 } from '@mui/material';
import React, { useState } from 'react'
import GroupButton from '../../components/GroupButton';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { CompanyLogosData, IssueButtonsData, ProfileData, DepartentButtonsData } from '../../Data';
import './index.css';
import Calender from '../../components/Calender';
import CustomButton from '../../components/Button';
import CustomAlert from '../../components/CustomAlert';

export default function MainSelectionPage() {
    const [issueButtonsData, setIssueButtonsData] = useState(IssueButtonsData);
    const [departentButtonsData, setDepartentButtonsData] = useState(DepartentButtonsData);
    const [companyLogosData, setCompanyLogosData] = useState(CompanyLogosData);
    const [profileData, setProfileData] = useState(ProfileData);
    const [issue, setIssue] = useState({});
    const [departent, setDepartent] = useState({});
    const [profile, setProfile] = useState({});
    const [company, setCompany] = useState({});
    const [issueDescription, setIssueDescription] = useState("");
    const [choice_1, setChoice_1] = useState("");
    const [choice_2, setChoice_2] = useState("");
    const [choice_3, setChoice_3] = useState("");
    const [note, setNote] = useState("");
    const [document, setDocument] = useState("");
    const [deadline, setDeadline] = useState();
    const [showMessage, setShowMessage] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [finalData, setFinalData] = useState({});

    const handleSelectIssue = (value) => {
        const _data = issueButtonsData.map((x,i)=>{
            if(x.title === value.title){
                return {title: x.title, selected: !x.selected}
            }else if(x.title !== value.title){
                return {title: x.title, selected: false}
            }
            return x;
        })
        setIssue(value);
        setIssueButtonsData(_data);

    }

    const handleSelectDepartent = (value) => {
        const _data = departentButtonsData.map((x,i)=>{
            if(x.title === value.title){
                return {title: x.title, selected: !x.selected}
            }else if(x.title !== value.title){
                return {title: x.title, selected: false}
            }
            return x;
        })
        setDepartent(value)
        setDepartentButtonsData(_data);

    }

    const handleSelectCompany = (value, index) => {
        const _data = companyLogosData.map((x,i)=>{
            if(i === index){
                return {path: x.path, selected: !x.selected}
            }else if(i !== index){
                return {path: x.path, selected: false}
            }
            return x;
        })
        setCompany(value)
        setCompanyLogosData(_data);

    }

    const handleSelectProfile = (value, index) => {
        const _data = profileData.map((x,i)=>{
            if(i === index){
                return {path: x.path, selected: !x.selected}
            }else if(i !== index){
                return {path: x.path, selected: false}
            }
            return x;
        })
        setProfile(value)
        setProfileData(_data);

    }

    const handleChangeDate = (value) => {
        setDeadline(value)
    }

    const handleSubmit = () => {
        const data = {
            issue,
            departent,
            company,
            profile,
            issueDescription,
            choice_1,
            choice_2,
            choice_3,
            note,
            document,
            deadline
        }
        setFinalData(data);
        setAlertMessage("Success!");
        setShowMessage(true);
    }

    const handleDelete = () => {
        setIssueButtonsData(IssueButtonsData);
        setDepartentButtonsData(DepartentButtonsData);
        setCompanyLogosData(CompanyLogosData);
        setProfileData(ProfileData);
        setIssue("");
        setDepartent("");
        setProfile("");
        setCompany("");
        setIssueDescription("");
        setChoice_1("");
        setChoice_2("");
        setChoice_3("");
        setDeadline("");
        setNote("");
        setDocument("");
        setAlertMessage("Data Cleared Successfully!");
        setShowMessage(true);

    }

    const clearAlert = () => {
        setAlertMessage("");
        setShowMessage(false);
    }

    const fileChangedHandler = async (e) => {
         console.log(e.target.files[0])
        //  setFile(URL.createObjectURL(e.target.files[0]));
         setDocument(e.target.files[0])
    }


  return (
    <Container>
        {/**=================================== SECTION 1=================== */}
      <h1 className='text-center'>ISSUE</h1>

      <div className='text-center mt-2'>
      <GroupButton 
      ButtonsData={issueButtonsData}
      onClick={handleSelectIssue}
      />
      </div>

    {/**=================================== SECTION 2=================== */}


      <h3 className='text-center mt-3'>Relating to what departent</h3>

      <div className='text-center mt-3'>
      <GroupButton 
      ButtonsData={departentButtonsData}
      onClick={handleSelectDepartent}
      />
      </div>

    {/**=================================== SECTION 3=================== */}


      <h3 className='text-center mt-4'>Relating to what departent</h3>

        <div className='row mt-3' style={{ boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)", borderRadius: 18}}>
            <div className='col-12 d-flex justify-content-evenly'>
                {companyLogosData.map((item, index)=> (
                    <div className='p-2' onClick={()=> handleSelectCompany(item, index)}>
                        {item.selected ? <Badge color="secondary" badgeContent="selected">
                        <img src={item.path} style={{width: 40, height: 12}} />
                        </Badge>
                        :
                        <img src={item.path} style={{width: 40, height: 12}} />
                        }
                     </div>
                ))}
            </div>
        </div>

    {/**=================================== SECTION 4=================== */}


        <h3 className='text-center mt-4'>Direct it to whome ?</h3>

        <div className='row mt-4 p-1' >
            <div className='col-12 d-flex justify-content-center'>
                {profileData.map((item, index)=> (
                    <div className='ms-5 cursor-pointer' onClick={()=> handleSelectProfile(item, index)}>
                        {item.selected ? 
                        <Badge color="secondary" badgeContent="selected">
                        <img src={item.path} style={{width: 40, height: 40, cursor: "pointer"}} />
                        </Badge>
                        :
                        <img src={item.path} style={{width: 40, height: 40, cursor: "pointer"}} />
                        }
                     </div>
                ))}
            </div>
        </div>

    {/**=================================== SECTION 5=================== */}


        <div className='row mt-4' style={{marginBottom: -15}} >

            <div className='col-4 text-center'>
                <p className='issue-text'>Issue</p>
            </div>

            <div className='col-4'>
                <div className='row'>
                    <div className='col-4 ps-3'>
                    <p className='choices-text'>Choices</p>
                    </div>
                    <div className='col-4 ps-3'>
                    <p className='choices-text'>Choices</p>
                    </div>
                    <div className='col-4 ps-3'>
                    <p className='choices-text'>Choices</p>
                    </div>
                </div> 
            </div>
            <div className='col-3 text-center'>
            <p className='note-text'>Note</p>
            </div>
            <div className='col-1 text-center'>
            <p className='document-text'>Supporting Document</p>
            </div>
        </div>

        <div className='row' >

            <div className='col-4'>
                <input 
                value={issueDescription} 
                onChange={(e)=> setIssueDescription(e.target.value)} 
                />
            </div>

            <div className='col-4'>
                <div className='row'>
                    <div className='col-4'>
                        <input 
                value={choice_1} 
                onChange={(e)=> setChoice_1(e.target.value)} 
                 />
                    </div>
                    <div className='col-4 '>
                    <input 
                value={choice_2} 
                onChange={(e)=> setChoice_2(e.target.value)} 
                 />
                    </div>
                    <div className='col-4 '>
                    <input 
                value={choice_3} 
                onChange={(e)=> setChoice_3(e.target.value)} 
                />
                    </div>
                </div> 
            </div>
            <div className='col-3 '>
                <input 
                value={note} 
                onChange={(e)=> setNote(e.target.value)} 
                />
            </div>
            <div className='col-1 align-self-center text-center'>
            <input
                  accept="image/x-png,image/jpeg"
                  hidden
                  id="contained-button-file"
                  type="file"
                  onChange={fileChangedHandler}
                />
                <label htmlFor="contained-button-file">
                <CloudUploadIcon style={{cursor: "pointer"}} />
                </label>
                <br></br>
                {document?.name && "file uploaded"}
            </div>
        </div>

    {/**=================================== SECTION 6=================== */}


        <h3 className='text-center mt-4'>Deadline</h3>
        <div className='text-center'>
            <Calender handleDate={handleChangeDate} />
            {/* {deadline} */}
        </div>


    {/**=================================== SECTION 7=================== */}


        <div className='text-center d-flex justify-content-evenly mt-5'>
            <CustomButton 
            title="Delete" 
            onClick={handleDelete}
            style={{backgroundColor: "#D9D9D9", color: "#000000", width:213, height: 48, borderRadius: 23, fontSize: 24, fontWeight: "700", border: "none"}} 
            />
            <CustomButton 
            title="Save" 
            onClick={handleSubmit}
            style={{backgroundColor: "#D9D9D9", color: "#000000", width:213, height: 48, borderRadius: 23, fontSize: 24, fontWeight: "700", border: "none"}} 
            />
            <CustomButton 
            title="Submit" 
            onClick={handleSubmit}
            style={{backgroundColor: "#D9D9D9", color: "#000000", width:213, height: 48, borderRadius: 23, fontSize: 24, fontWeight: "700", border: "none"}} 
            />
        </div>

        {showMessage && <CustomAlert
        show={showMessage}
        message={alertMessage}
        clearAlert={clearAlert}
        />}

    </Container>
  )
}
