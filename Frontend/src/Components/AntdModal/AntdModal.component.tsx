
import { Modal } from 'antd'

type AntdModalProps = {
    open: boolean;
    title?: string;
    closeIcon: boolean;
    onCancel: () => void;
    centered?: boolean;
    maskClosable?: boolean;
    style?: React.CSSProperties;
    afterClose?: () => void
    body: React.ReactNode;
    width?: number
}

const AntdModal = ({ open, title, closeIcon, onCancel, centered, maskClosable, style, afterClose, body, width }: AntdModalProps) => {

    return (
        <>
            <Modal
                style={style}
                open={open}
                title={title ? title : ''}
                closeIcon={closeIcon}
                onCancel={onCancel}
                centered={centered}
                footer=""
                maskClosable={maskClosable}
                afterClose={afterClose}
                width={width}
            >
                {body}
            </Modal>
        </>
    )
}

export default AntdModal