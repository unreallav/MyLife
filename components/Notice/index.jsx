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
                }}>GAS越大 鱼越贵!</p>
                <p style={{color: '#666', marginBottom: '10px'}}>为什么要这样做？</p>
//                 <ul>
//                     <li style={{color: '#666', marginBottom: '10px'}}>1.
//                         由于服务器和域名原因，每次大家都得输入地址才能访问，不方便。
//                     </li>
//                     <li style={{color: '#666', marginBottom: '10px'}}>2. 迁移到Github以后，大家可以直接通过域名访问。</li>
//                     <li style={{color: '#666', marginBottom: '10px'}}>3.
//                         迁移以后，这款工具依旧是永久免费和永久开源的。永远都不会收费。
//                     </li>
//                     <li style={{color: '#666', marginBottom: '10px'}}>4.
//                         迁移以后，能够更快的访问网页，不会出现卡顿或者打不开网页的情况。
//                     </li>
//                 </ul>
               
                <p>本程序源自北北 开源地址:<a
                    href={"https://github.com/wxtsky/MyWalletScan"}>https://github.com/wxtsky/MyWalletScan</a>
                </p>
            </Modal>
        </div>
    )
}
export default Notice;
