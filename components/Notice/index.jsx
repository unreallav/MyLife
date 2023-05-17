import {Modal} from "antd";
import {useEffect, useState} from "react";

const Notice = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    useEffect(() => {
        setModalIsOpen(true);
    }, []);
    return (
        <div>
            <Modal
                title="珍惜每一个大毛"
                open={modalIsOpen}
                onOk={() => setModalIsOpen(false)}
                onCancel={() => setModalIsOpen(false)}
                style={{fontFamily: 'Arial, sans-serif', top: 20}}
                okText={"知道了"}
            >
                <h2 style={{color: '#333', marginBottom: '15px'}}>风浪越大，毛越贵！</h2>
                <p style={{
                    color: '#666',
                    marginBottom: '10px'
                }}>《早知道》《要是》《如果》《太贵了》《真服了》《大腿拍烂》《卧槽》</p>
                <p style={{
                    color: '#666',
                    marginBottom: '10px'
                }}>Go Ahead</p>
               
               
                <p>本程序来源北北 开源地址:<a
                    href={"https://github.com/wxtsky/MyWalletScan"}>https://github.com/wxtsky/MyWalletScan</a>
                </p>
            </Modal>
        </div>
    )
}
export default Notice;
