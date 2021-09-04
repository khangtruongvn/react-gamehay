import React from "react";
import { Breadcrumb, Row } from "antd";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const notes = [
  '- Tất cả các file trên website đều có cùng 1 mật khẩu giải nén đó là "gcmy". Nếu game nào có mật khẩu riêng thì sẽ được ghi chú dưới link tải.',
  "- Tất cả các game trên web chỉ cần tải về giải nén là chơi được ngay. Nếu game nào có hướng dẫn riêng thì sẽ được viết trực tiếp trên trang đó.",
  "- Những game có cấu hình thấp dưới Pentium D và 1GB RAM thì Admin sẽ không ghi cấu hình.",
  "- Những game thuộc về cổ điển là những game mà tất cả các máy đều có thể chơi và đa số mọi người đều đã biết nên sẽ không có hình ảnh gameplay.",
  '- Mục game "Pokemon" là phần đặc biệt trên web, sẽ ko phân biệt máy mạnh hay yếu vì phần đó Ad up vì đam mê thôi :")',
];

const TutorialPage = () => {
  const history = useHistory();
  const theme = useSelector((state) => state.theme);
  const renderNotes = () => {
    if (!notes || !notes.length) return;
    return notes.map((note, index) => <p key={index}>{note}</p>);
  };
  return (
    <Row className={`content__tutorialpage ${theme}`}>
      <Breadcrumb className="tutorialpage__breadcrumb">
        <Breadcrumb.Item onClick={() => history.push("/")}>
          Trang chủ
        </Breadcrumb.Item>
        <Breadcrumb.Item>Hướng dẫn tải game</Breadcrumb.Item>
      </Breadcrumb>
      <h1 className="tutorialpage__heading">Hướng dẫn tải game</h1>
      <div className="tutorialpage__content">
        <h1 className="content__heading">1. Hướng dẫn tải game trên website</h1>
        <p className="link__group">
          Bước 1: Truy cập vào đường dẫn bên dưới để cài đặt tiện ích lấy link.
          <a
            className="link"
            href="https://chrome.google.com/webstore/detail/link-code-link/ipflefaacfknoocdjpmiclkopenjhech"
            target="_blank"
          >
            Tại đây
          </a>
        </p>
        <img src="https://1.bp.blogspot.com/-9b0rhwfropg/YQaBATv5o8I/AAAAAAAAAQ4/5rBbn47rLNckagT7AoEi5adt7zCzjrpFQCLcBGAsYHQ/w640-h301/1.png" />
        <p>
          Bước 2: Tìm game sau đó "bấm vào nút copy" ở mục tải game để copy mã.
        </p>
        <p>
          Bước 3: Nhấn vào biểu tượng extension vừa cài đặt ở bước 1 để hiển thị
          tiện ích.
        </p>
        <img src="https://1.bp.blogspot.com/-zLMmgEEzLxg/YQaC3P40eBI/AAAAAAAAARA/xFyjERXKNoYKiPI7UDJ6xbLFPs8r_v-tACLcBGAsYHQ/w640-h344/2.png" />
        <p>Bước 4: Bấm vào nút "Paste Code" để dán mã lên form.</p>
        <p>Bước 5: Bấm vào nút "Start Decode" để giải mã đoạn mã trên.</p>
        <p>Bước 6: Bấm vào nút "Go Link" để đi đến link tải game.</p>
        <img src="https://1.bp.blogspot.com/-jIBR8q9rnhM/YQaDx8ZLbmI/AAAAAAAAARI/54_tdqMJ2EQTk1xkqLpnShO2VOWXFYO_QCLcBGAsYHQ/w640-h344/3.png" />
        <p>Bước 7: Tải game.</p>
        <img src="https://1.bp.blogspot.com/-FvZnr9x9jxA/YQo_VLOs6FI/AAAAAAAAAWQ/3UkOXYFSLacMAoxGkiT8vn5RtMJbBVzQwCLcBGAsYHQ/w640-h300/7.png" />

        <h1 className="content__heading">
          2. Lưu ý sau khi tải game và các thắc mắc trên website
        </h1>
        {renderNotes()}

        <h1 className="content__heading">
          3. Các phần mềm cần thiết để chơi game
        </h1>
      </div>
    </Row>
  );
};
export default TutorialPage;
