import React from "react";
import { FaUndo, FaRegCheckCircle } from "react-icons/fa";
import "../../Style/Admin/quanlyloaivacxin.css"

export default function Quanlyloaivacxin() {
  return (
    <>
      <div className="container1">
        <h2 className="header-name1"> Sửa loại vacxin </h2>
        <form>
          <div className="form-input-vacxin1">
            <div className="vacxin-input1">
              <p>
                Mã loại vacxin <b className="key-important">(*):</b>
              </p>
              <input
                type="text"
                className="ma-input1 info-loai-vacxin1"
                placeholder="VC01"
                readOnly
              />
            </div>

            <div className="vacxin-input1">
              <p>
                Tên loại vacxin <b className="key-important">(*):</b>
              </p>
              <input type="text" className="ma-input1 info-loai-vacxin1" required />
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
    </>
  );
}
