import React, { useState } from "react";
import { FaUndo, FaRegCheckCircle } from "react-icons/fa";
import "../../Style/Admin/quanlyvacxin.css"

export default function Quanlyvacxin() {
  const [myVacxin, setMyVacXin] = useState("Loại 1");

  const handleChange = (event) => {
    setMyVacXin(event.target.value);
  };
  return (
    <div className="container1">
      <h2 className="header-name1"> Sửa thông tin vacxin </h2>
      <form>
        <div className="form-input1">
          <div className="infomation-input1">
            <p>
              Mã vacxin <b className="important">(*):</b>
            </p>
            <input
              type="text"
              className="ma-input1 info-vacxin1"
              placeholder="VC01"
              readOnly
            />
          </div>
          <div className="infomation-input1">
            <p>
              Loại vacxin <b className="important">(*):</b>
            </p>
            <form className="category-vacxin1">
              <select
                value={myVacxin}
                onChange={handleChange}
                className="info-vacxin1"
              >
                <option value="Loại 1">Loại 1</option>
                <option value="Loại 2">Loại 2</option>
                <option value="Loại 3">Loại 3</option>
                <option value="Loại 4">Loại 4</option>
              </select>
            </form>
          </div>
          <div className="infomation-input1">
            <p>
              Tên vacxin <b className="important">(*):</b>
            </p>
            <input type="text" className="ma-input1 info-vacxin1" />
          </div>
        </div>

        <div className="form-input1">
          <div className="infomation-input1">
            <p>
              Ngày hết hạn <b className="important">(*):</b>
            </p>
            <form action="">
              <input
                type="datetime-local"
                id="birthdaytime"
                name="birthdaytime"
                className="info-vacxin1"
              />
            </form>
          </div>

          <div className="infomation-input1">
            <p>
              Nhà sản xuất <b className="important">(*):</b>
            </p>
            <input type="text" className="ma-input1 info-vacxin1"  />
          </div>
          <div className="infomation-input">
            <p>Mô tả :</p>
            <textarea type="text" className="ma-input1 note-vacxin1" />
          </div>
        </div>

        {/* Button */}
        <div className="btn-vacxin1">
          <button className="reset-btn1 btn-format1">
            <FaUndo />
            <i className="text-btn1">Nhập lại</i>
          </button>
          <button className="update-btn1 btn-format1">
            <FaRegCheckCircle />
            <i className="text-btn1">Cập nhật</i>
          </button>
        </div>
      </form>
    </div>
  );
}
