import { Col, Input, Modal, Row, Select, Spin, notification } from "antd"
import ModalExitIcon from "../../../assets/images/project/modal-exit.svg"
import ArrowIcon from "../../../assets/images/products/arrow.svg"
import { useEffect, useRef, useState } from "react"
import { userApi } from "../../../api/user.api"
import loadingAnimation from "../../../assets/json/Add Products.json"
import _ from "lodash"
import Lottie from "lottie-react"
import invitationApi from "../../../api/invitation.api"
import './styles.scss'
import { useSelector } from "react-redux"
import { getListRoles } from "../../../redux/roleSlice"

const ModalRetailerInvite = ({
    open,
    onClose = () => {}
}) => {
    const [listEmails, setListEmails] = useState([])
    const [selectedEmail, setSelectedEmail] = useState()
    const listRoles = useSelector(getListRoles)
    const timeoutRef = useRef()
    const [isLoading, setIsLoading] = useState(false)
    const [isSending, setIsSending] = useState(false)
    const [role, setRole] = useState()

    useEffect(() => {
        loadData('')
    }, [])

    useEffect(() => {
        setSelectedEmail(null)
    }, [open])

    const loadData = (search) => {
        if(timeoutRef.current){
            clearTimeout(timeoutRef.current)
        }

        timeoutRef.current = setTimeout(() => {
            setIsLoading(true)
            userApi.getUserEmailBySearch(search).then((rs) => {
                setListEmails(_.map(rs, (el) => {
                    return {
                        value: el.email,
                        label: el.email
                    }
                }))
                setIsLoading(false)
            }).catch(err => {
                notification.error({
                    message: _.get(err, ['response', 'data', 'message'], `Can't get email data!`)
                })
                setIsLoading(false)
            })
        }, 1000)
    } 

    const handleSubmit = () => {
        if(!selectedEmail){
            notification.warning({
                message: "Select an email to send invitation!"
            })
            return
        }
        if(!role){
            notification.warning({
                message: "Select role to send invitation!"
            })
            return
        }
        setIsSending(true)
        invitationApi.sendAnInvitation({
            email: selectedEmail,
            roleId: role
        }).then(rs => {
            notification.success({
                message: "Send and invitation successfully!"
            })
            setIsSending(false)
            onClose()
        }).catch(err => {
            notification.error({
                message: _.get(err, ['response', 'data', 'message'], `Can't send email!`)
            })
            setIsSending(false)
        })
    }

    return <>
    <Modal
        open={open}
        width={794}
        footer={null}
        closeIcon={<img src={ModalExitIcon} alt="" />}
        destroyOnClose={true}
        closable={true}
        centered
        className="modal-retailer-template"
        onCancel={() => {onClose()}}
    >
        <div className="modal-content">
            <div className="title">
                Invite your Staff
            </div>
            <Row gutter={[22, 22]} className="mt-[16px]">
                <Col lg={24} md={24} span={24}>
                    <Select
                        placeholder="Select role"
                        className="retailer-form-select w-full"
                        popupClassName="retailer-form-select-popup"
                        suffixIcon={<img src={ArrowIcon} alt="" />}
                        options={listRoles}
                        value={role}
                        onChange={(value) => {setRole(value)}}
                        showSearch
                        dropdownRender={(menu) => <>
                            <Spin spinning={isLoading} className="loading-indicator-wrapper-center" indicator={<Lottie animationData={loadingAnimation} />}>
                                {menu}
                            </Spin>
                        </>}
                        onSearch={(value) => {
                            loadData(value)
                        }}
                    />
                </Col>
                <Col lg={24} md={24} span={24}>
                    <Select
                        placeholder="Select an email"
                        className="retailer-form-select w-full"
                        popupClassName="retailer-form-select-popup"
                        suffixIcon={<img src={ArrowIcon} alt="" />}
                        options={listEmails}
                        value={selectedEmail}
                        onChange={(value) => {setSelectedEmail(value)}}
                        showSearch
                        dropdownRender={(menu) => <>
                            <Spin spinning={isLoading} className="loading-indicator-wrapper-center" indicator={<Lottie animationData={loadingAnimation} />}>
                                {menu}
                            </Spin>
                        </>}
                        onSearch={(value) => {
                            loadData(value)
                        }}
                    />
                </Col>
            </Row>
            <div className="flex items-center justify-center mt-[18px]">
                <Spin spinning={isSending}>
                    <div className="btn-template-save" onClick={handleSubmit}>
                        Invite
                    </div>
                </Spin>
            </div>
        </div>
    </Modal>
    </>
}
export default ModalRetailerInvite