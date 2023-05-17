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
                title="注意事项"
                open={modalIsOpen}
                onOk={() => setModalIsOpen(false)}
                onCancel={() => setModalIsOpen(false)}
                style={{fontFamily: 'Arial, sans-serif', top: 20}}
                okText={"知道了"}
            >
                <h2 style={{color: '#333', marginBottom: '15px'}}>Hello,</h2>
                <p style={{
                    color: '#666',
                    marginBottom: '10px'
                }}>没有人能像一张白纸一样没有故事 成长的代价就是失去原来的样子</p>
                <p style={{
                    color: '#666',
                    marginBottom: '10px'
                }}>         GAS越大 鱼越贵!          </p>
               
               
                <p>本程序源自北北 开源地址:<a
                    href={"https://github.com/wxtsky/MyWalletScan"}>https://github.com/wxtsky/MyWalletScan</a>
                </p>
            </Modal>
        </div>
    )
}
export default Notice;
