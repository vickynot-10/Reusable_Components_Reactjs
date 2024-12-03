import Loader from "../Reusable_components/Loaders/loader";
import { useState } from "react";
import "./file.css";
import Modal from "../Reusable_components/Modal/modal";
import SearchHeader from "../Reusable_components/SearchBox_DB/searchBox";
import {
  SelectBox,
  MenuItem,
} from "../Reusable_components/SelectBox/selectBox";
import Snackbar from "../Reusable_components/Snackbar/snackbar";
import Toaster from "../Reusable_components/Toaster/toaster";
import ToolTip from "../Reusable_components/ToolTip/tooltip";

function MainComp() {
  //LOADER COMPONENT
  const [isLoading, setLoading] = useState(true);
  const [loaderObj, setLoaderObj] = useState({
    color: "#3498db",
    size: 80,
    bordersize: null,
  });
  function toggleLoader() {
    setLoading(!isLoading);
  }

  function detailsLoader(e) {
    const { name, value } = e.target;
    setLoaderObj((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  //MODAL COMPONENT

  const [ismodalOpen, setModalopen] = useState(false);
  const [modalDetails, setModalDetails] = useState({
    headerText: "Header Text",
    headerFontColor: "red",
    height: "200",
    width: "200",
    bgcolor: "white",
  });

  function togglemodal() {
    setModalopen(!ismodalOpen);
  }

  function offmodal() {
    setModalopen(false);
  }

  function savingModalDetails(e) {
    const { name, value } = e.target;
    setModalDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  //SEARCH BOX

  const [showIcons, seticons] = useState({
    del: true,
    filter: true,
    rev: true,
  });

  function toggleSearchicons(str) {
    if (str === "delete") {
      seticons((prev) => ({
        ...prev,
        del: !prev.del,
      }));
      return;
    }
    if (str === "reverse") {
      seticons((prev) => ({
        ...prev,
        rev: !prev.rev,
      }));
      return;
    }
    if (str === "filter") {
      seticons((prev) => ({
        ...prev,
        filter: !prev.filter,
      }));
      return;
    }
  }

  //SELECT BOX

  const [value, setValue] = useState(0);
  const [maxheight, setmax] = useState(200);
  function selectvalues(value) {
    setValue(value);
  }

  function savemax(e) {
    const val = e.target.value;
    setmax(val);
  }

  //SNACKBAR
  const [showSnack, setSnack] = useState(true);
  const [snackText, setSnacktext] = useState({
    snacktext: "",
    snackcolor: "",
  });

  function toggleSnack() {
    setSnack(!showSnack);
  }
  function offSnack() {
    setSnack(false);
  }

  function settextSnack(e) {
    const { name, value } = e.target;
    setSnacktext((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  //TOASTER

  const [showToastervar, setToaster] = useState({
    err: false,
    info: false,
    success: false,
  });

  const [toasterobj, settoasterobj] = useState({
    msg: "hello from toaster",
    height: 200,
    width: 200,
  });

  function saveToasterDetails(e) {
    const { name, value } = e.target;
    settoasterobj((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function offToaster() {
    setToaster({
      err: false,
      info: false,
      success: false,
    });
  }

  function showToaster(val) {
    if (val === "success") {
      setToaster({
        success: true,
        info: false,
        err: false,
      });
      return;
    }
    if (val === "error") {
      setToaster({
        success: false,
        info: false,
        err: true,
      });
      return;
    }
    if (val === "info") {
      setToaster({
        success: false,
        info: true,
        err: false,
      });
      return;
    }
  }

  return (
    <div id="container">
      {ismodalOpen && (
        <Modal
          onClose={offmodal}
          headerText={modalDetails.headerText}
          headerTextColor={modalDetails.headerFontColor}
          modalBoxStyle={{
            opacity: "1",
            borderRadius: "12px",
            position: "fixed",
            display: "flex",
            padding: "20px",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "column",
            width: `${modalDetails.width}px`,
            height: `${modalDetails.height}px`,
            backgroundColor: ` ${modalDetails.bgcolor}`,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "100",
          }}
        />
      )}
      <div id="main-div">
        <div id="all-comp">
         
         
          <div id="loader-div-comp" >
            <p> Loader Componenet </p>
            {isLoading && (
              <Loader
                size={loaderObj.size}
                color={loaderObj.color}
                borderSize={loaderObj.bordersize}
              />
            )}
            <button onClick={toggleLoader} className="hover-btn" >
              {isLoading ? "Off Loader" : "Show Loader"}
            </button>
            <input
              type="number"
              onChange={detailsLoader}
              value={loaderObj.size}
              name="size"
              placeholder="Enter Loader Size to test"
            />
            <input
              type="color"
              onInput={detailsLoader}
              name="color"
              value={loaderObj.color}
            />
            <input
              type="number"
              onChange={detailsLoader}
              name="bordersize"
              value={loaderObj.bordersize}
              placeholder="Enter Loader Border Size"
            />
          </div>

          <div id="modal-comp-div" >
            <p id="modal-header-text" > Modal Component </p>
            <button onClick={togglemodal} className="hover-btn" >
              
              {ismodalOpen ? "Off Modal" : "Show Modal"}
            </button>
            <input
              type="text"
              placeholder="Header Text of modal"
              onChange={savingModalDetails}
              name="headerText"
              value={modalDetails.headerText}
            />
            <input
              type="number"
              placeholder="Height of modal"
              onChange={savingModalDetails}
              name="height"
              value={modalDetails.height}
            />
            <input
              type="number"
              placeholder="width of modal"
              onChange={savingModalDetails}
              name="width"
              value={modalDetails.width}
            />
            <div>
            <p>Header Font color</p>
            <input
              type="color"
              onInput={savingModalDetails}
              value={modalDetails.headerFontColor}
              name="headerFontColor"
            />
            </div>
            <div>
            <p>Background Color</p>
            <input
              type="color"
              onInput={savingModalDetails}
              value={modalDetails.bgcolor}
              name="bgcolor"
            />
            </div>
          </div>

          <div id="search-header-div">
            <div id="search-box">
              <SearchHeader
                deleteIcon={showIcons.del}
                ReverseIcon={showIcons.rev}
                FilterIcon={showIcons.filter}
              />
            </div>
            <div id="search-header-subdiv">
              <button onClick={() => toggleSearchicons("delete")} className="hover-btn" >
                
                {showIcons.del
                  ? "Disable Delete icon"
                  : "Show Delete icon"}
              </button>
              <button onClick={() => toggleSearchicons("reverse")} className="hover-btn" >
                
                {showIcons.rev
                  ? "Disable reverse icon"
                  : "Show reverse icon"}
              </button>
              <button onClick={() => toggleSearchicons("filter")} className="hover-btn" >
                
                {showIcons.filter
                  ? "Disable filter icon"
                  : "Show Filter icon"}
              </button>
            </div>
          </div>

          <div id="selectbox-div" >
          <p id="modal-header-text" > Select Box Component </p>
            <input
              type="number"
              placeholder="Max Height for dropdown"
              value={maxheight}
              onChange={savemax}
            />
            <SelectBox
              placeHolder="Choose"
              onChange={selectvalues}
              maxHeightDropdown={`${maxheight}px`}
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={30}>30</MenuItem>
              <MenuItem value={40}>40</MenuItem>
              <MenuItem value={50}>50</MenuItem>
              <MenuItem value={60}>60</MenuItem>
            </SelectBox>
            <p style={{
                margin:'20px'
            }} > you chose value  {value === 0 ? "None" : value} </p>
          </div>

          <div id="snackbar-div" >
          <p id="modal-header-text" >SnackBar Component </p>

            {showSnack && (
              <Snackbar
                AutoHideDuration={null}
                bgColor={snackText.snackcolor}
                onClose={offSnack}
              >
                
                {snackText.snacktext}
              </Snackbar>
            )}
            <button onClick={toggleSnack} className="hover-btn">
              
              {showSnack ? "Disable SnackBar" : "Show SnackBar"}
            </button>
            <input
              type="text"
              name="snacktext"
              value={snackText.snacktext}
              onChange={settextSnack}
            />
            <div>
                <p>Choose a Background color for Snackbar</p>
                <input
              type="color"
              name="snackcolor"
              onInput={settextSnack}
              value={snackText.snackcolor}
            />
            </div>
            
          </div>

          <div id="toaster-div" >
          <p id="modal-header-text" >Toaster Component </p>
            <input
              type="text"
              name="msg"
              onChange={saveToasterDetails}
              value={toasterobj.msg}
              placeholder="text of toaster"
            />
            <input
              type="number"
              name="width"
              placeholder="width of toaster"
              onChange={saveToasterDetails}
              value={toasterobj.width}
            />
            <input
              type="number"
              name="height"
              placeholder="height of toaster"
              onChange={saveToasterDetails}
              value={toasterobj.height}
            />
            <div>
            <button className="hover-btn" onClick={() => showToaster("error")}>
              Show Error Toaster
            </button>
            <button className="hover-btn" onClick={() => showToaster("success")}>
              Show Success Toaster
            </button>
            <button className="hover-btn" onClick={() => showToaster("info")}>
              Show Info Toaster
            </button>
            <button className="hover-btn" onClick={offToaster}>Off toaster</button>
            </div>

            {(showToastervar.err ||
              showToastervar.info ||
              showToastervar.success) && (
              <Toaster
                onClose={offToaster}
                height={`${toasterobj.height}px`}
                width={`${toasterobj.width}px`}
                message={`${toasterobj.msg}`}
                type={
                  showToastervar.err
                    ? "error"
                    : showToastervar.success
                    ? "success"
                    : showToastervar.info
                    ? "info"
                    : null
                }
              />
            )}
          </div>

          <div id="tooltip-div" >
          <p id="modal-header-text" >Tooltip Component </p>
            <ToolTip tooltipWidth="100px" >
              <p >Hover to see Tooltip</p>
            </ToolTip>
          </div>


        </div>
      </div>
    </div>
  );
}

export default MainComp;
