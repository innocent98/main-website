import { Select } from "antd"
import { FiEdit3 } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { VscError } from "react-icons/vsc";
import Button from '../../../../atoms/button/Button'
import React, { lazy, Suspense, useState } from 'react'
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import Container from '../../../../atoms/container/Container';
import Loader from "../../../../../atomic/atoms/loader/Loader";
import useUserProfileStore from '../../../../../../zustand/freelancerStore/useUserProfileStore';

const LazyLoadedImg = lazy(() => import("../../../../atoms/image/Image"))


const ProfileInfo = () => {
    //select options
    const optionsSchema = [
        { value: 'Mobile Developer', label: 'Mobile Developer' },
        { value: 'Frontend Developer', label: 'Frontend Developer' },
        { value: 'Backend Developer', label: 'Backend Developer' },
        { value: 'Full Stack Developer', label: 'Full Stack Developer' },
        { value: 'UI/UX Designer', label: 'UI/UX Designer' },
        { value: 'DevOps Engineer', label: 'DevOps Engineer' },
        { value: 'Data Scientist', label: 'Data Scientist' },
        { value: 'Machine Learning Engineer', label: 'Machine Learning Engineer' },
        { value: 'Product Manager', label: 'Product Manager' },
        { value: 'Project Manager', label: 'Project Manager' }
    ];

    //destructuring userProfileStore
    const {
        bio,
        skills,
        editBio,
        editSkill,
        isLoading,
        updateBio,
        removeSkill,
        isEditingBio,
        updateSkills,
        isEditingSkill,
    } = useUserProfileStore();

    //initial state
    const [bioInput, setBioInput] = useState(bio || "")
    const [selectedSkills, setSelectedSkills] = useState(skills || [])

    //bio state handlers
    const handleEditBioClick = () => {
        editBio(true)
    }
    const handleCancelBioClick = () => {
        editBio(false)
    }
    const handleBioUpdate = async () => {
        await updateBio(bioInput)
        editBio(false)
    }
    const handleBioChange = (event) => {
        setBioInput(event.target.value);
    };


    //skills state handlers > edit skills
    const handleEditSkillClick = () => {
        editSkill(true)
    }

    //cancel skill editing operation
    const handleCancelSkillClick = () => {
        editSkill(false)
    }

    //skill change function
    const handleSkillChange = (value) => {
        setSelectedSkills(value)
        console.log(selectedSkills);
    };

    //skill update function
    const handleSkillUpdate = async () => {
        await updateSkills(selectedSkills)
        editSkill(false)
    }

    return (
        <section className='profile-info'>
            <>
                <Suspense fallback={<div>loading...</div>}>
                    <LazyLoadedImg src="/assets/imgs/profileAvatar.svg" extension='svg' width={60} height={60} alt="user" />
                </Suspense>
                <h2>Surname Solomon</h2>
            </>
            <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h3>Bio</h3>
                    {isEditingBio
                        ?
                        <Container variant="wrapper--flex--fit">
                            <Button variant="transparent" onClick={handleCancelBioClick}>Cancel</Button>
                            <Button variant="default--fit" onClick={handleBioUpdate} style={{ marginTop: 0 }}>{isLoading ? <Loader variant="default" /> : "Save"}</Button>
                        </Container>
                        :
                        <Button variant="transparent" onClick={handleEditBioClick}>Edit</Button>}
                </div>
                {isEditingBio ? (
                    <textarea value={bioInput} onChange={handleBioChange} className="bioInput" draggable={false} />
                ) : (
                    <p>{bio}</p>
                )}
            </div>
            <div>
                <h3>Skills</h3>
                <section>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Container variant="wrapper--gridColsFour" className="profile--skill--btnWrapper">
                           {selectedSkills.map((skill)=>(
                            <Button onClick={()=>removeSkill(skill.id)} variant="outlined--full" style={{marginLeft:"4px", marginBottom:"4px"}}>{skill} {isEditingSkill && <RxCross2/>}</Button>
                           ))}
                        </Container>
                        <div>
                            {isEditingSkill ?
                                <Container variant="wrapper--flex--fit" >
                                    <IoIosCheckmarkCircleOutline className='skill-icon'  onClick={handleSkillUpdate}/>
                                    <VscError className='skill-icon' onClick={handleCancelSkillClick} />
                                </Container>
                                : <FiEdit3 className='skill-icon' onClick={handleEditSkillClick} />
                            }
                        </div>
                    </div>
                    {isEditingSkill && <div>
                        <Select
                            mode="tags"
                            style={{
                                width: '100%',
                                marginTop: "10px"
                            }}
                            onChange={handleSkillChange}
                            placeholder="e.g Software developer, Digital marketer"
                            tokenSeparators={[',']}
                            options={optionsSchema}
                        />
                    </div>}
                </section>
            </div>
            <div>
                <h3>Location</h3>
                <p>Lagos, Nigeria</p>
            </div>
        </section>
    )
}

export default ProfileInfo
