import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Input } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { useFlex1Cb, useFlex2Cb, useFlex3Cb, useFlex4Cb, useDiv1Cb, useFlex64Cb, useDiv5Cb, useDiv6Cb, useFlex6Cb, useFlex9Cb, useDiv8Cb, useDiv11Cb, useFlex13Cb, useDiv12Cb, useFlex65Cb, useDiv13Cb, useFlex14Cb, useDiv14Cb, useDiv15Cb, useFlex67Cb, useFlex15Cb, useDiv16Cb, useFlex68Cb, useDiv17Cb, useFlex16Cb, useDiv18Cb, useFlex69Cb, useDiv19Cb, useFlex26Cb, useFlex70Cb, useFlex33Cb, useDiv26Cb, useDiv27Cb, useFlex72Cb, useFlex35Cb, useFlex36Cb, useFlex74Cb, useFlex39Cb, useFlex40Cb, useDiv28Cb, useDiv35Cb, useDiv36Cb, useDiv37Cb, useDiv38Cb, useDiv39Cb, useFlex43Cb, useFlex42Cb, useFlex76Cb, useFlex45Cb, useDiv40Cb, useDiv41Cb, useFlex47Cb, useDiv42Cb, useDiv43Cb, useFlex49Cb, useFlex50Cb, useDiv44Cb, useFlex51Cb, useDiv46Cb, useDiv45Cb, useFlex52Cb, useFlex53Cb, useDiv47Cb, useFlex56Cb, useFlex54Cb, useDiv49Cb, useFlex57Cb, useDiv50Cb, useDiv51Cb, useDiv53Cb, useFlex58Cb, useFlex60Cb, useFlex61Cb, useFlex62Cb, useFlex63Cb, useTextBox1Cb, useButton45Cb, useButton46Cb, useButton47Cb, useButton48Cb, useImage1Cb, useTextBox6Cb, useTextBox7Cb, useTextBox10Cb, useTextBox11Cb, useTextBox12Cb, useTextBox16Cb, useTextBox17Cb, useTextBox18Cb, useImage51Cb, useButton50Cb, useImage3Cb, useImage4Cb, useTextBox19Cb, useTextBox20Cb, useTextBox21Cb, useButton51Cb, useImage52Cb, useTextBox22Cb, useTextBox23Cb, useTextBox24Cb, useButton52Cb, useImage53Cb, useImage5Cb, useTextBox25Cb, useTextBox26Cb, useTextBox27Cb, useButton53Cb, useImage54Cb, useImage6Cb, useButton54Cb, useImage55Cb, useImage23Cb, useImage22Cb, useTextBox33Cb, useTextBox35Cb, useButton56Cb, useImage57Cb, useTextBox36Cb, useButton58Cb, useImage59Cb, useImage25Cb, useTextBox37Cb, useTextBox38Cb, useTextBox49Cb, useTextBox50Cb, useImage31Cb, useTextBox51Cb, useTextBox52Cb, useImage32Cb, useTextBox53Cb, useTextBox54Cb, useImage33Cb, useTextBox55Cb, useTextBox56Cb, useImage34Cb, useTextBox57Cb, useTextBox58Cb, useImage35Cb, useTextBox59Cb, useButton60Cb, useImage61Cb, useImage38Cb, useTextBox61Cb, useTextBox62Cb, useImage40Cb, useTextBox64Cb, useTextBox65Cb, useTextBox66Cb, useTextBox68Cb, useTextBox69Cb, useTextBox70Cb, useImage41Cb, useTextBox73Cb, useTextBox74Cb, useInput1Cb, useButton2Cb, useImage42Cb, useTextBox75Cb, useButton5Cb, useButton6Cb, useButton7Cb, useButton8Cb, useButton9Cb, useButton10Cb, useButton11Cb, useButton12Cb, useButton13Cb, useButton17Cb, useButton18Cb, useButton19Cb, useButton21Cb, useButton22Cb, useButton23Cb, useButton24Cb, useButton25Cb, useButton26Cb, useTextBox127Cb, useTextBox128Cb, useButton34Cb, useButton33Cb, useButton32Cb, useButton31Cb, useButton30Cb, useButton29Cb, useTextBox130Cb, useTextBox131Cb, useTextBox132Cb, useTextBox134Cb, useImage43Cb, useImage44Cb, useImage45Cb, useImage46Cb, useImage47Cb, useImage48Cb, useImage49Cb } from "../page-cbs/Home";
import "../page-css/Home.css"

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Flex1Props = useStore((state)=>state["Home"]["Flex1"]);
const Flex1IoProps = useIoStore((state)=>state["Home"]["Flex1"]);
const Flex1Cb = useFlex1Cb()
const Flex2Props = useStore((state)=>state["Home"]["Flex2"]);
const Flex2IoProps = useIoStore((state)=>state["Home"]["Flex2"]);
const Flex2Cb = useFlex2Cb()
const Flex3Props = useStore((state)=>state["Home"]["Flex3"]);
const Flex3IoProps = useIoStore((state)=>state["Home"]["Flex3"]);
const Flex3Cb = useFlex3Cb()
const Flex4Props = useStore((state)=>state["Home"]["Flex4"]);
const Flex4IoProps = useIoStore((state)=>state["Home"]["Flex4"]);
const Flex4Cb = useFlex4Cb()
const Div1Props = useStore((state)=>state["Home"]["Div1"]);
const Div1IoProps = useIoStore((state)=>state["Home"]["Div1"]);
const Div1Cb = useDiv1Cb()
const Flex64Props = useStore((state)=>state["Home"]["Flex64"]);
const Flex64IoProps = useIoStore((state)=>state["Home"]["Flex64"]);
const Flex64Cb = useFlex64Cb()
const Div5Props = useStore((state)=>state["Home"]["Div5"]);
const Div5IoProps = useIoStore((state)=>state["Home"]["Div5"]);
const Div5Cb = useDiv5Cb()
const Div6Props = useStore((state)=>state["Home"]["Div6"]);
const Div6IoProps = useIoStore((state)=>state["Home"]["Div6"]);
const Div6Cb = useDiv6Cb()
const Flex6Props = useStore((state)=>state["Home"]["Flex6"]);
const Flex6IoProps = useIoStore((state)=>state["Home"]["Flex6"]);
const Flex6Cb = useFlex6Cb()
const Flex9Props = useStore((state)=>state["Home"]["Flex9"]);
const Flex9IoProps = useIoStore((state)=>state["Home"]["Flex9"]);
const Flex9Cb = useFlex9Cb()
const Div8Props = useStore((state)=>state["Home"]["Div8"]);
const Div8IoProps = useIoStore((state)=>state["Home"]["Div8"]);
const Div8Cb = useDiv8Cb()
const Div11Props = useStore((state)=>state["Home"]["Div11"]);
const Div11IoProps = useIoStore((state)=>state["Home"]["Div11"]);
const Div11Cb = useDiv11Cb()
const Flex13Props = useStore((state)=>state["Home"]["Flex13"]);
const Flex13IoProps = useIoStore((state)=>state["Home"]["Flex13"]);
const Flex13Cb = useFlex13Cb()
const Div12Props = useStore((state)=>state["Home"]["Div12"]);
const Div12IoProps = useIoStore((state)=>state["Home"]["Div12"]);
const Div12Cb = useDiv12Cb()
const Flex65Props = useStore((state)=>state["Home"]["Flex65"]);
const Flex65IoProps = useIoStore((state)=>state["Home"]["Flex65"]);
const Flex65Cb = useFlex65Cb()
const Div13Props = useStore((state)=>state["Home"]["Div13"]);
const Div13IoProps = useIoStore((state)=>state["Home"]["Div13"]);
const Div13Cb = useDiv13Cb()
const Flex14Props = useStore((state)=>state["Home"]["Flex14"]);
const Flex14IoProps = useIoStore((state)=>state["Home"]["Flex14"]);
const Flex14Cb = useFlex14Cb()
const Div14Props = useStore((state)=>state["Home"]["Div14"]);
const Div14IoProps = useIoStore((state)=>state["Home"]["Div14"]);
const Div14Cb = useDiv14Cb()
const Div15Props = useStore((state)=>state["Home"]["Div15"]);
const Div15IoProps = useIoStore((state)=>state["Home"]["Div15"]);
const Div15Cb = useDiv15Cb()
const Flex67Props = useStore((state)=>state["Home"]["Flex67"]);
const Flex67IoProps = useIoStore((state)=>state["Home"]["Flex67"]);
const Flex67Cb = useFlex67Cb()
const Flex15Props = useStore((state)=>state["Home"]["Flex15"]);
const Flex15IoProps = useIoStore((state)=>state["Home"]["Flex15"]);
const Flex15Cb = useFlex15Cb()
const Div16Props = useStore((state)=>state["Home"]["Div16"]);
const Div16IoProps = useIoStore((state)=>state["Home"]["Div16"]);
const Div16Cb = useDiv16Cb()
const Flex68Props = useStore((state)=>state["Home"]["Flex68"]);
const Flex68IoProps = useIoStore((state)=>state["Home"]["Flex68"]);
const Flex68Cb = useFlex68Cb()
const Div17Props = useStore((state)=>state["Home"]["Div17"]);
const Div17IoProps = useIoStore((state)=>state["Home"]["Div17"]);
const Div17Cb = useDiv17Cb()
const Flex16Props = useStore((state)=>state["Home"]["Flex16"]);
const Flex16IoProps = useIoStore((state)=>state["Home"]["Flex16"]);
const Flex16Cb = useFlex16Cb()
const Div18Props = useStore((state)=>state["Home"]["Div18"]);
const Div18IoProps = useIoStore((state)=>state["Home"]["Div18"]);
const Div18Cb = useDiv18Cb()
const Flex69Props = useStore((state)=>state["Home"]["Flex69"]);
const Flex69IoProps = useIoStore((state)=>state["Home"]["Flex69"]);
const Flex69Cb = useFlex69Cb()
const Div19Props = useStore((state)=>state["Home"]["Div19"]);
const Div19IoProps = useIoStore((state)=>state["Home"]["Div19"]);
const Div19Cb = useDiv19Cb()
const Flex26Props = useStore((state)=>state["Home"]["Flex26"]);
const Flex26IoProps = useIoStore((state)=>state["Home"]["Flex26"]);
const Flex26Cb = useFlex26Cb()
const Flex70Props = useStore((state)=>state["Home"]["Flex70"]);
const Flex70IoProps = useIoStore((state)=>state["Home"]["Flex70"]);
const Flex70Cb = useFlex70Cb()
const Flex33Props = useStore((state)=>state["Home"]["Flex33"]);
const Flex33IoProps = useIoStore((state)=>state["Home"]["Flex33"]);
const Flex33Cb = useFlex33Cb()
const Div26Props = useStore((state)=>state["Home"]["Div26"]);
const Div26IoProps = useIoStore((state)=>state["Home"]["Div26"]);
const Div26Cb = useDiv26Cb()
const Div27Props = useStore((state)=>state["Home"]["Div27"]);
const Div27IoProps = useIoStore((state)=>state["Home"]["Div27"]);
const Div27Cb = useDiv27Cb()
const Flex72Props = useStore((state)=>state["Home"]["Flex72"]);
const Flex72IoProps = useIoStore((state)=>state["Home"]["Flex72"]);
const Flex72Cb = useFlex72Cb()
const Flex35Props = useStore((state)=>state["Home"]["Flex35"]);
const Flex35IoProps = useIoStore((state)=>state["Home"]["Flex35"]);
const Flex35Cb = useFlex35Cb()
const Flex36Props = useStore((state)=>state["Home"]["Flex36"]);
const Flex36IoProps = useIoStore((state)=>state["Home"]["Flex36"]);
const Flex36Cb = useFlex36Cb()
const Flex74Props = useStore((state)=>state["Home"]["Flex74"]);
const Flex74IoProps = useIoStore((state)=>state["Home"]["Flex74"]);
const Flex74Cb = useFlex74Cb()
const Flex39Props = useStore((state)=>state["Home"]["Flex39"]);
const Flex39IoProps = useIoStore((state)=>state["Home"]["Flex39"]);
const Flex39Cb = useFlex39Cb()
const Flex40Props = useStore((state)=>state["Home"]["Flex40"]);
const Flex40IoProps = useIoStore((state)=>state["Home"]["Flex40"]);
const Flex40Cb = useFlex40Cb()
const Div28Props = useStore((state)=>state["Home"]["Div28"]);
const Div28IoProps = useIoStore((state)=>state["Home"]["Div28"]);
const Div28Cb = useDiv28Cb()
const Div35Props = useStore((state)=>state["Home"]["Div35"]);
const Div35IoProps = useIoStore((state)=>state["Home"]["Div35"]);
const Div35Cb = useDiv35Cb()
const Div36Props = useStore((state)=>state["Home"]["Div36"]);
const Div36IoProps = useIoStore((state)=>state["Home"]["Div36"]);
const Div36Cb = useDiv36Cb()
const Div37Props = useStore((state)=>state["Home"]["Div37"]);
const Div37IoProps = useIoStore((state)=>state["Home"]["Div37"]);
const Div37Cb = useDiv37Cb()
const Div38Props = useStore((state)=>state["Home"]["Div38"]);
const Div38IoProps = useIoStore((state)=>state["Home"]["Div38"]);
const Div38Cb = useDiv38Cb()
const Div39Props = useStore((state)=>state["Home"]["Div39"]);
const Div39IoProps = useIoStore((state)=>state["Home"]["Div39"]);
const Div39Cb = useDiv39Cb()
const Flex43Props = useStore((state)=>state["Home"]["Flex43"]);
const Flex43IoProps = useIoStore((state)=>state["Home"]["Flex43"]);
const Flex43Cb = useFlex43Cb()
const Flex42Props = useStore((state)=>state["Home"]["Flex42"]);
const Flex42IoProps = useIoStore((state)=>state["Home"]["Flex42"]);
const Flex42Cb = useFlex42Cb()
const Flex76Props = useStore((state)=>state["Home"]["Flex76"]);
const Flex76IoProps = useIoStore((state)=>state["Home"]["Flex76"]);
const Flex76Cb = useFlex76Cb()
const Flex45Props = useStore((state)=>state["Home"]["Flex45"]);
const Flex45IoProps = useIoStore((state)=>state["Home"]["Flex45"]);
const Flex45Cb = useFlex45Cb()
const Div40Props = useStore((state)=>state["Home"]["Div40"]);
const Div40IoProps = useIoStore((state)=>state["Home"]["Div40"]);
const Div40Cb = useDiv40Cb()
const Div41Props = useStore((state)=>state["Home"]["Div41"]);
const Div41IoProps = useIoStore((state)=>state["Home"]["Div41"]);
const Div41Cb = useDiv41Cb()
const Flex47Props = useStore((state)=>state["Home"]["Flex47"]);
const Flex47IoProps = useIoStore((state)=>state["Home"]["Flex47"]);
const Flex47Cb = useFlex47Cb()
const Div42Props = useStore((state)=>state["Home"]["Div42"]);
const Div42IoProps = useIoStore((state)=>state["Home"]["Div42"]);
const Div42Cb = useDiv42Cb()
const Div43Props = useStore((state)=>state["Home"]["Div43"]);
const Div43IoProps = useIoStore((state)=>state["Home"]["Div43"]);
const Div43Cb = useDiv43Cb()
const Flex49Props = useStore((state)=>state["Home"]["Flex49"]);
const Flex49IoProps = useIoStore((state)=>state["Home"]["Flex49"]);
const Flex49Cb = useFlex49Cb()
const Flex50Props = useStore((state)=>state["Home"]["Flex50"]);
const Flex50IoProps = useIoStore((state)=>state["Home"]["Flex50"]);
const Flex50Cb = useFlex50Cb()
const Div44Props = useStore((state)=>state["Home"]["Div44"]);
const Div44IoProps = useIoStore((state)=>state["Home"]["Div44"]);
const Div44Cb = useDiv44Cb()
const Flex51Props = useStore((state)=>state["Home"]["Flex51"]);
const Flex51IoProps = useIoStore((state)=>state["Home"]["Flex51"]);
const Flex51Cb = useFlex51Cb()
const Div46Props = useStore((state)=>state["Home"]["Div46"]);
const Div46IoProps = useIoStore((state)=>state["Home"]["Div46"]);
const Div46Cb = useDiv46Cb()
const Div45Props = useStore((state)=>state["Home"]["Div45"]);
const Div45IoProps = useIoStore((state)=>state["Home"]["Div45"]);
const Div45Cb = useDiv45Cb()
const Flex52Props = useStore((state)=>state["Home"]["Flex52"]);
const Flex52IoProps = useIoStore((state)=>state["Home"]["Flex52"]);
const Flex52Cb = useFlex52Cb()
const Flex53Props = useStore((state)=>state["Home"]["Flex53"]);
const Flex53IoProps = useIoStore((state)=>state["Home"]["Flex53"]);
const Flex53Cb = useFlex53Cb()
const Div47Props = useStore((state)=>state["Home"]["Div47"]);
const Div47IoProps = useIoStore((state)=>state["Home"]["Div47"]);
const Div47Cb = useDiv47Cb()
const Flex56Props = useStore((state)=>state["Home"]["Flex56"]);
const Flex56IoProps = useIoStore((state)=>state["Home"]["Flex56"]);
const Flex56Cb = useFlex56Cb()
const Flex54Props = useStore((state)=>state["Home"]["Flex54"]);
const Flex54IoProps = useIoStore((state)=>state["Home"]["Flex54"]);
const Flex54Cb = useFlex54Cb()
const Div49Props = useStore((state)=>state["Home"]["Div49"]);
const Div49IoProps = useIoStore((state)=>state["Home"]["Div49"]);
const Div49Cb = useDiv49Cb()
const Flex57Props = useStore((state)=>state["Home"]["Flex57"]);
const Flex57IoProps = useIoStore((state)=>state["Home"]["Flex57"]);
const Flex57Cb = useFlex57Cb()
const Div50Props = useStore((state)=>state["Home"]["Div50"]);
const Div50IoProps = useIoStore((state)=>state["Home"]["Div50"]);
const Div50Cb = useDiv50Cb()
const Div51Props = useStore((state)=>state["Home"]["Div51"]);
const Div51IoProps = useIoStore((state)=>state["Home"]["Div51"]);
const Div51Cb = useDiv51Cb()
const Div53Props = useStore((state)=>state["Home"]["Div53"]);
const Div53IoProps = useIoStore((state)=>state["Home"]["Div53"]);
const Div53Cb = useDiv53Cb()
const Flex58Props = useStore((state)=>state["Home"]["Flex58"]);
const Flex58IoProps = useIoStore((state)=>state["Home"]["Flex58"]);
const Flex58Cb = useFlex58Cb()
const Flex60Props = useStore((state)=>state["Home"]["Flex60"]);
const Flex60IoProps = useIoStore((state)=>state["Home"]["Flex60"]);
const Flex60Cb = useFlex60Cb()
const Flex61Props = useStore((state)=>state["Home"]["Flex61"]);
const Flex61IoProps = useIoStore((state)=>state["Home"]["Flex61"]);
const Flex61Cb = useFlex61Cb()
const Flex62Props = useStore((state)=>state["Home"]["Flex62"]);
const Flex62IoProps = useIoStore((state)=>state["Home"]["Flex62"]);
const Flex62Cb = useFlex62Cb()
const Flex63Props = useStore((state)=>state["Home"]["Flex63"]);
const Flex63IoProps = useIoStore((state)=>state["Home"]["Flex63"]);
const Flex63Cb = useFlex63Cb()
const TextBox1Props = useStore((state)=>state["Home"]["TextBox1"]);
const TextBox1IoProps = useIoStore((state)=>state["Home"]["TextBox1"]);
const TextBox1Cb = useTextBox1Cb()
const Button45Props = useStore((state)=>state["Home"]["Button45"]);
const Button45IoProps = useIoStore((state)=>state["Home"]["Button45"]);
const Button45Cb = useButton45Cb()
const Button46Props = useStore((state)=>state["Home"]["Button46"]);
const Button46IoProps = useIoStore((state)=>state["Home"]["Button46"]);
const Button46Cb = useButton46Cb()
const Button47Props = useStore((state)=>state["Home"]["Button47"]);
const Button47IoProps = useIoStore((state)=>state["Home"]["Button47"]);
const Button47Cb = useButton47Cb()
const Button48Props = useStore((state)=>state["Home"]["Button48"]);
const Button48IoProps = useIoStore((state)=>state["Home"]["Button48"]);
const Button48Cb = useButton48Cb()
const Image1Props = useStore((state)=>state["Home"]["Image1"]);
const Image1IoProps = useIoStore((state)=>state["Home"]["Image1"]);
const Image1Cb = useImage1Cb()
const TextBox6Props = useStore((state)=>state["Home"]["TextBox6"]);
const TextBox6IoProps = useIoStore((state)=>state["Home"]["TextBox6"]);
const TextBox6Cb = useTextBox6Cb()
const TextBox7Props = useStore((state)=>state["Home"]["TextBox7"]);
const TextBox7IoProps = useIoStore((state)=>state["Home"]["TextBox7"]);
const TextBox7Cb = useTextBox7Cb()
const TextBox10Props = useStore((state)=>state["Home"]["TextBox10"]);
const TextBox10IoProps = useIoStore((state)=>state["Home"]["TextBox10"]);
const TextBox10Cb = useTextBox10Cb()
const TextBox11Props = useStore((state)=>state["Home"]["TextBox11"]);
const TextBox11IoProps = useIoStore((state)=>state["Home"]["TextBox11"]);
const TextBox11Cb = useTextBox11Cb()
const TextBox12Props = useStore((state)=>state["Home"]["TextBox12"]);
const TextBox12IoProps = useIoStore((state)=>state["Home"]["TextBox12"]);
const TextBox12Cb = useTextBox12Cb()
const TextBox16Props = useStore((state)=>state["Home"]["TextBox16"]);
const TextBox16IoProps = useIoStore((state)=>state["Home"]["TextBox16"]);
const TextBox16Cb = useTextBox16Cb()
const TextBox17Props = useStore((state)=>state["Home"]["TextBox17"]);
const TextBox17IoProps = useIoStore((state)=>state["Home"]["TextBox17"]);
const TextBox17Cb = useTextBox17Cb()
const TextBox18Props = useStore((state)=>state["Home"]["TextBox18"]);
const TextBox18IoProps = useIoStore((state)=>state["Home"]["TextBox18"]);
const TextBox18Cb = useTextBox18Cb()
const Image51Props = useStore((state)=>state["Home"]["Image51"]);
const Image51IoProps = useIoStore((state)=>state["Home"]["Image51"]);
const Image51Cb = useImage51Cb()
const Button50Props = useStore((state)=>state["Home"]["Button50"]);
const Button50IoProps = useIoStore((state)=>state["Home"]["Button50"]);
const Button50Cb = useButton50Cb()
const Image3Props = useStore((state)=>state["Home"]["Image3"]);
const Image3IoProps = useIoStore((state)=>state["Home"]["Image3"]);
const Image3Cb = useImage3Cb()
const Image4Props = useStore((state)=>state["Home"]["Image4"]);
const Image4IoProps = useIoStore((state)=>state["Home"]["Image4"]);
const Image4Cb = useImage4Cb()
const TextBox19Props = useStore((state)=>state["Home"]["TextBox19"]);
const TextBox19IoProps = useIoStore((state)=>state["Home"]["TextBox19"]);
const TextBox19Cb = useTextBox19Cb()
const TextBox20Props = useStore((state)=>state["Home"]["TextBox20"]);
const TextBox20IoProps = useIoStore((state)=>state["Home"]["TextBox20"]);
const TextBox20Cb = useTextBox20Cb()
const TextBox21Props = useStore((state)=>state["Home"]["TextBox21"]);
const TextBox21IoProps = useIoStore((state)=>state["Home"]["TextBox21"]);
const TextBox21Cb = useTextBox21Cb()
const Button51Props = useStore((state)=>state["Home"]["Button51"]);
const Button51IoProps = useIoStore((state)=>state["Home"]["Button51"]);
const Button51Cb = useButton51Cb()
const Image52Props = useStore((state)=>state["Home"]["Image52"]);
const Image52IoProps = useIoStore((state)=>state["Home"]["Image52"]);
const Image52Cb = useImage52Cb()
const TextBox22Props = useStore((state)=>state["Home"]["TextBox22"]);
const TextBox22IoProps = useIoStore((state)=>state["Home"]["TextBox22"]);
const TextBox22Cb = useTextBox22Cb()
const TextBox23Props = useStore((state)=>state["Home"]["TextBox23"]);
const TextBox23IoProps = useIoStore((state)=>state["Home"]["TextBox23"]);
const TextBox23Cb = useTextBox23Cb()
const TextBox24Props = useStore((state)=>state["Home"]["TextBox24"]);
const TextBox24IoProps = useIoStore((state)=>state["Home"]["TextBox24"]);
const TextBox24Cb = useTextBox24Cb()
const Button52Props = useStore((state)=>state["Home"]["Button52"]);
const Button52IoProps = useIoStore((state)=>state["Home"]["Button52"]);
const Button52Cb = useButton52Cb()
const Image53Props = useStore((state)=>state["Home"]["Image53"]);
const Image53IoProps = useIoStore((state)=>state["Home"]["Image53"]);
const Image53Cb = useImage53Cb()
const Image5Props = useStore((state)=>state["Home"]["Image5"]);
const Image5IoProps = useIoStore((state)=>state["Home"]["Image5"]);
const Image5Cb = useImage5Cb()
const TextBox25Props = useStore((state)=>state["Home"]["TextBox25"]);
const TextBox25IoProps = useIoStore((state)=>state["Home"]["TextBox25"]);
const TextBox25Cb = useTextBox25Cb()
const TextBox26Props = useStore((state)=>state["Home"]["TextBox26"]);
const TextBox26IoProps = useIoStore((state)=>state["Home"]["TextBox26"]);
const TextBox26Cb = useTextBox26Cb()
const TextBox27Props = useStore((state)=>state["Home"]["TextBox27"]);
const TextBox27IoProps = useIoStore((state)=>state["Home"]["TextBox27"]);
const TextBox27Cb = useTextBox27Cb()
const Button53Props = useStore((state)=>state["Home"]["Button53"]);
const Button53IoProps = useIoStore((state)=>state["Home"]["Button53"]);
const Button53Cb = useButton53Cb()
const Image54Props = useStore((state)=>state["Home"]["Image54"]);
const Image54IoProps = useIoStore((state)=>state["Home"]["Image54"]);
const Image54Cb = useImage54Cb()
const Image6Props = useStore((state)=>state["Home"]["Image6"]);
const Image6IoProps = useIoStore((state)=>state["Home"]["Image6"]);
const Image6Cb = useImage6Cb()
const Button54Props = useStore((state)=>state["Home"]["Button54"]);
const Button54IoProps = useIoStore((state)=>state["Home"]["Button54"]);
const Button54Cb = useButton54Cb()
const Image55Props = useStore((state)=>state["Home"]["Image55"]);
const Image55IoProps = useIoStore((state)=>state["Home"]["Image55"]);
const Image55Cb = useImage55Cb()
const Image23Props = useStore((state)=>state["Home"]["Image23"]);
const Image23IoProps = useIoStore((state)=>state["Home"]["Image23"]);
const Image23Cb = useImage23Cb()
const Image22Props = useStore((state)=>state["Home"]["Image22"]);
const Image22IoProps = useIoStore((state)=>state["Home"]["Image22"]);
const Image22Cb = useImage22Cb()
const TextBox33Props = useStore((state)=>state["Home"]["TextBox33"]);
const TextBox33IoProps = useIoStore((state)=>state["Home"]["TextBox33"]);
const TextBox33Cb = useTextBox33Cb()
const TextBox35Props = useStore((state)=>state["Home"]["TextBox35"]);
const TextBox35IoProps = useIoStore((state)=>state["Home"]["TextBox35"]);
const TextBox35Cb = useTextBox35Cb()
const Button56Props = useStore((state)=>state["Home"]["Button56"]);
const Button56IoProps = useIoStore((state)=>state["Home"]["Button56"]);
const Button56Cb = useButton56Cb()
const Image57Props = useStore((state)=>state["Home"]["Image57"]);
const Image57IoProps = useIoStore((state)=>state["Home"]["Image57"]);
const Image57Cb = useImage57Cb()
const TextBox36Props = useStore((state)=>state["Home"]["TextBox36"]);
const TextBox36IoProps = useIoStore((state)=>state["Home"]["TextBox36"]);
const TextBox36Cb = useTextBox36Cb()
const Button58Props = useStore((state)=>state["Home"]["Button58"]);
const Button58IoProps = useIoStore((state)=>state["Home"]["Button58"]);
const Button58Cb = useButton58Cb()
const Image59Props = useStore((state)=>state["Home"]["Image59"]);
const Image59IoProps = useIoStore((state)=>state["Home"]["Image59"]);
const Image59Cb = useImage59Cb()
const Image25Props = useStore((state)=>state["Home"]["Image25"]);
const Image25IoProps = useIoStore((state)=>state["Home"]["Image25"]);
const Image25Cb = useImage25Cb()
const TextBox37Props = useStore((state)=>state["Home"]["TextBox37"]);
const TextBox37IoProps = useIoStore((state)=>state["Home"]["TextBox37"]);
const TextBox37Cb = useTextBox37Cb()
const TextBox38Props = useStore((state)=>state["Home"]["TextBox38"]);
const TextBox38IoProps = useIoStore((state)=>state["Home"]["TextBox38"]);
const TextBox38Cb = useTextBox38Cb()
const TextBox49Props = useStore((state)=>state["Home"]["TextBox49"]);
const TextBox49IoProps = useIoStore((state)=>state["Home"]["TextBox49"]);
const TextBox49Cb = useTextBox49Cb()
const TextBox50Props = useStore((state)=>state["Home"]["TextBox50"]);
const TextBox50IoProps = useIoStore((state)=>state["Home"]["TextBox50"]);
const TextBox50Cb = useTextBox50Cb()
const Image31Props = useStore((state)=>state["Home"]["Image31"]);
const Image31IoProps = useIoStore((state)=>state["Home"]["Image31"]);
const Image31Cb = useImage31Cb()
const TextBox51Props = useStore((state)=>state["Home"]["TextBox51"]);
const TextBox51IoProps = useIoStore((state)=>state["Home"]["TextBox51"]);
const TextBox51Cb = useTextBox51Cb()
const TextBox52Props = useStore((state)=>state["Home"]["TextBox52"]);
const TextBox52IoProps = useIoStore((state)=>state["Home"]["TextBox52"]);
const TextBox52Cb = useTextBox52Cb()
const Image32Props = useStore((state)=>state["Home"]["Image32"]);
const Image32IoProps = useIoStore((state)=>state["Home"]["Image32"]);
const Image32Cb = useImage32Cb()
const TextBox53Props = useStore((state)=>state["Home"]["TextBox53"]);
const TextBox53IoProps = useIoStore((state)=>state["Home"]["TextBox53"]);
const TextBox53Cb = useTextBox53Cb()
const TextBox54Props = useStore((state)=>state["Home"]["TextBox54"]);
const TextBox54IoProps = useIoStore((state)=>state["Home"]["TextBox54"]);
const TextBox54Cb = useTextBox54Cb()
const Image33Props = useStore((state)=>state["Home"]["Image33"]);
const Image33IoProps = useIoStore((state)=>state["Home"]["Image33"]);
const Image33Cb = useImage33Cb()
const TextBox55Props = useStore((state)=>state["Home"]["TextBox55"]);
const TextBox55IoProps = useIoStore((state)=>state["Home"]["TextBox55"]);
const TextBox55Cb = useTextBox55Cb()
const TextBox56Props = useStore((state)=>state["Home"]["TextBox56"]);
const TextBox56IoProps = useIoStore((state)=>state["Home"]["TextBox56"]);
const TextBox56Cb = useTextBox56Cb()
const Image34Props = useStore((state)=>state["Home"]["Image34"]);
const Image34IoProps = useIoStore((state)=>state["Home"]["Image34"]);
const Image34Cb = useImage34Cb()
const TextBox57Props = useStore((state)=>state["Home"]["TextBox57"]);
const TextBox57IoProps = useIoStore((state)=>state["Home"]["TextBox57"]);
const TextBox57Cb = useTextBox57Cb()
const TextBox58Props = useStore((state)=>state["Home"]["TextBox58"]);
const TextBox58IoProps = useIoStore((state)=>state["Home"]["TextBox58"]);
const TextBox58Cb = useTextBox58Cb()
const Image35Props = useStore((state)=>state["Home"]["Image35"]);
const Image35IoProps = useIoStore((state)=>state["Home"]["Image35"]);
const Image35Cb = useImage35Cb()
const TextBox59Props = useStore((state)=>state["Home"]["TextBox59"]);
const TextBox59IoProps = useIoStore((state)=>state["Home"]["TextBox59"]);
const TextBox59Cb = useTextBox59Cb()
const Button60Props = useStore((state)=>state["Home"]["Button60"]);
const Button60IoProps = useIoStore((state)=>state["Home"]["Button60"]);
const Button60Cb = useButton60Cb()
const Image61Props = useStore((state)=>state["Home"]["Image61"]);
const Image61IoProps = useIoStore((state)=>state["Home"]["Image61"]);
const Image61Cb = useImage61Cb()
const Image38Props = useStore((state)=>state["Home"]["Image38"]);
const Image38IoProps = useIoStore((state)=>state["Home"]["Image38"]);
const Image38Cb = useImage38Cb()
const TextBox61Props = useStore((state)=>state["Home"]["TextBox61"]);
const TextBox61IoProps = useIoStore((state)=>state["Home"]["TextBox61"]);
const TextBox61Cb = useTextBox61Cb()
const TextBox62Props = useStore((state)=>state["Home"]["TextBox62"]);
const TextBox62IoProps = useIoStore((state)=>state["Home"]["TextBox62"]);
const TextBox62Cb = useTextBox62Cb()
const Image40Props = useStore((state)=>state["Home"]["Image40"]);
const Image40IoProps = useIoStore((state)=>state["Home"]["Image40"]);
const Image40Cb = useImage40Cb()
const TextBox64Props = useStore((state)=>state["Home"]["TextBox64"]);
const TextBox64IoProps = useIoStore((state)=>state["Home"]["TextBox64"]);
const TextBox64Cb = useTextBox64Cb()
const TextBox65Props = useStore((state)=>state["Home"]["TextBox65"]);
const TextBox65IoProps = useIoStore((state)=>state["Home"]["TextBox65"]);
const TextBox65Cb = useTextBox65Cb()
const TextBox66Props = useStore((state)=>state["Home"]["TextBox66"]);
const TextBox66IoProps = useIoStore((state)=>state["Home"]["TextBox66"]);
const TextBox66Cb = useTextBox66Cb()
const TextBox68Props = useStore((state)=>state["Home"]["TextBox68"]);
const TextBox68IoProps = useIoStore((state)=>state["Home"]["TextBox68"]);
const TextBox68Cb = useTextBox68Cb()
const TextBox69Props = useStore((state)=>state["Home"]["TextBox69"]);
const TextBox69IoProps = useIoStore((state)=>state["Home"]["TextBox69"]);
const TextBox69Cb = useTextBox69Cb()
const TextBox70Props = useStore((state)=>state["Home"]["TextBox70"]);
const TextBox70IoProps = useIoStore((state)=>state["Home"]["TextBox70"]);
const TextBox70Cb = useTextBox70Cb()
const Image41Props = useStore((state)=>state["Home"]["Image41"]);
const Image41IoProps = useIoStore((state)=>state["Home"]["Image41"]);
const Image41Cb = useImage41Cb()
const TextBox73Props = useStore((state)=>state["Home"]["TextBox73"]);
const TextBox73IoProps = useIoStore((state)=>state["Home"]["TextBox73"]);
const TextBox73Cb = useTextBox73Cb()
const TextBox74Props = useStore((state)=>state["Home"]["TextBox74"]);
const TextBox74IoProps = useIoStore((state)=>state["Home"]["TextBox74"]);
const TextBox74Cb = useTextBox74Cb()
const Input1Props = useStore((state)=>state["Home"]["Input1"]);
const Input1IoProps = useIoStore((state)=>state["Home"]["Input1"]);
const Input1Cb = useInput1Cb()
const Button2Props = useStore((state)=>state["Home"]["Button2"]);
const Button2IoProps = useIoStore((state)=>state["Home"]["Button2"]);
const Button2Cb = useButton2Cb()
const Image42Props = useStore((state)=>state["Home"]["Image42"]);
const Image42IoProps = useIoStore((state)=>state["Home"]["Image42"]);
const Image42Cb = useImage42Cb()
const TextBox75Props = useStore((state)=>state["Home"]["TextBox75"]);
const TextBox75IoProps = useIoStore((state)=>state["Home"]["TextBox75"]);
const TextBox75Cb = useTextBox75Cb()
const Button5Props = useStore((state)=>state["Home"]["Button5"]);
const Button5IoProps = useIoStore((state)=>state["Home"]["Button5"]);
const Button5Cb = useButton5Cb()
const Button6Props = useStore((state)=>state["Home"]["Button6"]);
const Button6IoProps = useIoStore((state)=>state["Home"]["Button6"]);
const Button6Cb = useButton6Cb()
const Button7Props = useStore((state)=>state["Home"]["Button7"]);
const Button7IoProps = useIoStore((state)=>state["Home"]["Button7"]);
const Button7Cb = useButton7Cb()
const Button8Props = useStore((state)=>state["Home"]["Button8"]);
const Button8IoProps = useIoStore((state)=>state["Home"]["Button8"]);
const Button8Cb = useButton8Cb()
const Button9Props = useStore((state)=>state["Home"]["Button9"]);
const Button9IoProps = useIoStore((state)=>state["Home"]["Button9"]);
const Button9Cb = useButton9Cb()
const Button10Props = useStore((state)=>state["Home"]["Button10"]);
const Button10IoProps = useIoStore((state)=>state["Home"]["Button10"]);
const Button10Cb = useButton10Cb()
const Button11Props = useStore((state)=>state["Home"]["Button11"]);
const Button11IoProps = useIoStore((state)=>state["Home"]["Button11"]);
const Button11Cb = useButton11Cb()
const Button12Props = useStore((state)=>state["Home"]["Button12"]);
const Button12IoProps = useIoStore((state)=>state["Home"]["Button12"]);
const Button12Cb = useButton12Cb()
const Button13Props = useStore((state)=>state["Home"]["Button13"]);
const Button13IoProps = useIoStore((state)=>state["Home"]["Button13"]);
const Button13Cb = useButton13Cb()
const Button17Props = useStore((state)=>state["Home"]["Button17"]);
const Button17IoProps = useIoStore((state)=>state["Home"]["Button17"]);
const Button17Cb = useButton17Cb()
const Button18Props = useStore((state)=>state["Home"]["Button18"]);
const Button18IoProps = useIoStore((state)=>state["Home"]["Button18"]);
const Button18Cb = useButton18Cb()
const Button19Props = useStore((state)=>state["Home"]["Button19"]);
const Button19IoProps = useIoStore((state)=>state["Home"]["Button19"]);
const Button19Cb = useButton19Cb()
const Button21Props = useStore((state)=>state["Home"]["Button21"]);
const Button21IoProps = useIoStore((state)=>state["Home"]["Button21"]);
const Button21Cb = useButton21Cb()
const Button22Props = useStore((state)=>state["Home"]["Button22"]);
const Button22IoProps = useIoStore((state)=>state["Home"]["Button22"]);
const Button22Cb = useButton22Cb()
const Button23Props = useStore((state)=>state["Home"]["Button23"]);
const Button23IoProps = useIoStore((state)=>state["Home"]["Button23"]);
const Button23Cb = useButton23Cb()
const Button24Props = useStore((state)=>state["Home"]["Button24"]);
const Button24IoProps = useIoStore((state)=>state["Home"]["Button24"]);
const Button24Cb = useButton24Cb()
const Button25Props = useStore((state)=>state["Home"]["Button25"]);
const Button25IoProps = useIoStore((state)=>state["Home"]["Button25"]);
const Button25Cb = useButton25Cb()
const Button26Props = useStore((state)=>state["Home"]["Button26"]);
const Button26IoProps = useIoStore((state)=>state["Home"]["Button26"]);
const Button26Cb = useButton26Cb()
const TextBox127Props = useStore((state)=>state["Home"]["TextBox127"]);
const TextBox127IoProps = useIoStore((state)=>state["Home"]["TextBox127"]);
const TextBox127Cb = useTextBox127Cb()
const TextBox128Props = useStore((state)=>state["Home"]["TextBox128"]);
const TextBox128IoProps = useIoStore((state)=>state["Home"]["TextBox128"]);
const TextBox128Cb = useTextBox128Cb()
const Button34Props = useStore((state)=>state["Home"]["Button34"]);
const Button34IoProps = useIoStore((state)=>state["Home"]["Button34"]);
const Button34Cb = useButton34Cb()
const Button33Props = useStore((state)=>state["Home"]["Button33"]);
const Button33IoProps = useIoStore((state)=>state["Home"]["Button33"]);
const Button33Cb = useButton33Cb()
const Button32Props = useStore((state)=>state["Home"]["Button32"]);
const Button32IoProps = useIoStore((state)=>state["Home"]["Button32"]);
const Button32Cb = useButton32Cb()
const Button31Props = useStore((state)=>state["Home"]["Button31"]);
const Button31IoProps = useIoStore((state)=>state["Home"]["Button31"]);
const Button31Cb = useButton31Cb()
const Button30Props = useStore((state)=>state["Home"]["Button30"]);
const Button30IoProps = useIoStore((state)=>state["Home"]["Button30"]);
const Button30Cb = useButton30Cb()
const Button29Props = useStore((state)=>state["Home"]["Button29"]);
const Button29IoProps = useIoStore((state)=>state["Home"]["Button29"]);
const Button29Cb = useButton29Cb()
const TextBox130Props = useStore((state)=>state["Home"]["TextBox130"]);
const TextBox130IoProps = useIoStore((state)=>state["Home"]["TextBox130"]);
const TextBox130Cb = useTextBox130Cb()
const TextBox131Props = useStore((state)=>state["Home"]["TextBox131"]);
const TextBox131IoProps = useIoStore((state)=>state["Home"]["TextBox131"]);
const TextBox131Cb = useTextBox131Cb()
const TextBox132Props = useStore((state)=>state["Home"]["TextBox132"]);
const TextBox132IoProps = useIoStore((state)=>state["Home"]["TextBox132"]);
const TextBox132Cb = useTextBox132Cb()
const TextBox134Props = useStore((state)=>state["Home"]["TextBox134"]);
const TextBox134IoProps = useIoStore((state)=>state["Home"]["TextBox134"]);
const TextBox134Cb = useTextBox134Cb()
const Image43Props = useStore((state)=>state["Home"]["Image43"]);
const Image43IoProps = useIoStore((state)=>state["Home"]["Image43"]);
const Image43Cb = useImage43Cb()
const Image44Props = useStore((state)=>state["Home"]["Image44"]);
const Image44IoProps = useIoStore((state)=>state["Home"]["Image44"]);
const Image44Cb = useImage44Cb()
const Image45Props = useStore((state)=>state["Home"]["Image45"]);
const Image45IoProps = useIoStore((state)=>state["Home"]["Image45"]);
const Image45Cb = useImage45Cb()
const Image46Props = useStore((state)=>state["Home"]["Image46"]);
const Image46IoProps = useIoStore((state)=>state["Home"]["Image46"]);
const Image46Cb = useImage46Cb()
const Image47Props = useStore((state)=>state["Home"]["Image47"]);
const Image47IoProps = useIoStore((state)=>state["Home"]["Image47"]);
const Image47Cb = useImage47Cb()
const Image48Props = useStore((state)=>state["Home"]["Image48"]);
const Image48IoProps = useIoStore((state)=>state["Home"]["Image48"]);
const Image48Cb = useImage48Cb()
const Image49Props = useStore((state)=>state["Home"]["Image49"]);
const Image49IoProps = useIoStore((state)=>state["Home"]["Image49"]);
const Image49Cb = useImage49Cb()

  return (<>
  <Flex className="p-Home Flex1" {...Flex1Props} {...Flex1Cb} {...Flex1IoProps}>
<Flex className="p-Home Flex2" {...Flex2Props} {...Flex2Cb} {...Flex2IoProps}>
<TextBox className="p-Home TextBox1" {...TextBox1Props} {...TextBox1Cb} {...TextBox1IoProps}/>
</Flex>
<Flex className="p-Home Flex3" {...Flex3Props} {...Flex3Cb} {...Flex3IoProps}>
<Flex className="p-Home Flex4" {...Flex4Props} {...Flex4Cb} {...Flex4IoProps}>
<Div className="p-Home Div1" {...Div1Props} {...Div1Cb} {...Div1IoProps}>
<Flex className="p-Home Flex64" {...Flex64Props} {...Flex64Cb} {...Flex64IoProps}>
<Button className="p-Home Button45" {...Button45Props} {...Button45Cb} {...Button45IoProps}/>
<Button className="p-Home Button46" {...Button46Props} {...Button46Cb} {...Button46IoProps}/>
<Button className="p-Home Button47" {...Button47Props} {...Button47Cb} {...Button47IoProps}/>
<Button className="p-Home Button48" {...Button48Props} {...Button48Cb} {...Button48IoProps}/>
</Flex>
</Div>
</Flex>
</Flex>
<Div className="p-Home Div5" {...Div5Props} {...Div5Cb} {...Div5IoProps}>
<Image className="p-Home Image1" {...Image1Props} {...Image1Cb} {...Image1IoProps}/>
</Div>
</Flex>
<Div className="p-Home Div6" {...Div6Props} {...Div6Cb} {...Div6IoProps}>
<Flex className="p-Home Flex6" {...Flex6Props} {...Flex6Cb} {...Flex6IoProps}>
<TextBox className="p-Home TextBox6" {...TextBox6Props} {...TextBox6Cb} {...TextBox6IoProps}/>
<Flex className="p-Home Flex9" {...Flex9Props} {...Flex9Cb} {...Flex9IoProps}>
<TextBox className="p-Home TextBox10" {...TextBox10Props} {...TextBox10Cb} {...TextBox10IoProps}/>
<TextBox className="p-Home TextBox11" {...TextBox11Props} {...TextBox11Cb} {...TextBox11IoProps}/>
</Flex>
<TextBox className="p-Home TextBox7" {...TextBox7Props} {...TextBox7Cb} {...TextBox7IoProps}/>
</Flex>
</Div>
<Div className="p-Home Div8" {...Div8Props} {...Div8Cb} {...Div8IoProps}>
<TextBox className="p-Home TextBox12" {...TextBox12Props} {...TextBox12Cb} {...TextBox12IoProps}/>
</Div>
<Div className="p-Home Div11" {...Div11Props} {...Div11Cb} {...Div11IoProps}>
<Flex className="p-Home Flex13" {...Flex13Props} {...Flex13Cb} {...Flex13IoProps}>
<Div className="p-Home Div12" {...Div12Props} {...Div12Cb} {...Div12IoProps}>
<TextBox className="p-Home TextBox17" {...TextBox17Props} {...TextBox17Cb} {...TextBox17IoProps}/>
<TextBox className="p-Home TextBox16" {...TextBox16Props} {...TextBox16Cb} {...TextBox16IoProps}/>
<TextBox className="p-Home TextBox18" {...TextBox18Props} {...TextBox18Cb} {...TextBox18IoProps}/>
<Flex className="p-Home Flex65" {...Flex65Props} {...Flex65Cb} {...Flex65IoProps}>
<Button className="p-Home Button50" {...Button50Props} {...Button50Cb} {...Button50IoProps}/>
<Image className="p-Home Image51" {...Image51Props} {...Image51Cb} {...Image51IoProps}/>
</Flex>
</Div>
<Div className="p-Home Div13" {...Div13Props} {...Div13Cb} {...Div13IoProps}>
<Image className="p-Home Image3" {...Image3Props} {...Image3Cb} {...Image3IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex14" {...Flex14Props} {...Flex14Cb} {...Flex14IoProps}>
<Div className="p-Home Div15" {...Div15Props} {...Div15Cb} {...Div15IoProps}>
<TextBox className="p-Home TextBox20" {...TextBox20Props} {...TextBox20Cb} {...TextBox20IoProps}/>
<TextBox className="p-Home TextBox21" {...TextBox21Props} {...TextBox21Cb} {...TextBox21IoProps}/>
<TextBox className="p-Home TextBox19" {...TextBox19Props} {...TextBox19Cb} {...TextBox19IoProps}/>
<Flex className="p-Home Flex67" {...Flex67Props} {...Flex67Cb} {...Flex67IoProps}>
<Button className="p-Home Button51" {...Button51Props} {...Button51Cb} {...Button51IoProps}/>
<Image className="p-Home Image52" {...Image52Props} {...Image52Cb} {...Image52IoProps}/>
</Flex>
</Div>
<Div className="p-Home Div14" {...Div14Props} {...Div14Cb} {...Div14IoProps}>
<Image className="p-Home Image4" {...Image4Props} {...Image4Cb} {...Image4IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex15" {...Flex15Props} {...Flex15Cb} {...Flex15IoProps}>
<Div className="p-Home Div16" {...Div16Props} {...Div16Cb} {...Div16IoProps}>
<TextBox className="p-Home TextBox23" {...TextBox23Props} {...TextBox23Cb} {...TextBox23IoProps}/>
<TextBox className="p-Home TextBox22" {...TextBox22Props} {...TextBox22Cb} {...TextBox22IoProps}/>
<TextBox className="p-Home TextBox24" {...TextBox24Props} {...TextBox24Cb} {...TextBox24IoProps}/>
<Flex className="p-Home Flex68" {...Flex68Props} {...Flex68Cb} {...Flex68IoProps}>
<Button className="p-Home Button52" {...Button52Props} {...Button52Cb} {...Button52IoProps}/>
<Image className="p-Home Image53" {...Image53Props} {...Image53Cb} {...Image53IoProps}/>
</Flex>
</Div>
<Div className="p-Home Div17" {...Div17Props} {...Div17Cb} {...Div17IoProps}>
<Image className="p-Home Image5" {...Image5Props} {...Image5Cb} {...Image5IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex16" {...Flex16Props} {...Flex16Cb} {...Flex16IoProps}>
<Div className="p-Home Div18" {...Div18Props} {...Div18Cb} {...Div18IoProps}>
<TextBox className="p-Home TextBox26" {...TextBox26Props} {...TextBox26Cb} {...TextBox26IoProps}/>
<TextBox className="p-Home TextBox25" {...TextBox25Props} {...TextBox25Cb} {...TextBox25IoProps}/>
<TextBox className="p-Home TextBox27" {...TextBox27Props} {...TextBox27Cb} {...TextBox27IoProps}/>
<Flex className="p-Home Flex69" {...Flex69Props} {...Flex69Cb} {...Flex69IoProps}>
<Button className="p-Home Button53" {...Button53Props} {...Button53Cb} {...Button53IoProps}/>
<Image className="p-Home Image54" {...Image54Props} {...Image54Cb} {...Image54IoProps}/>
</Flex>
</Div>
<Div className="p-Home Div19" {...Div19Props} {...Div19Cb} {...Div19IoProps}>
<Image className="p-Home Image6" {...Image6Props} {...Image6Cb} {...Image6IoProps}/>
</Div>
</Flex>
</Div>
<Flex className="p-Home Flex26" {...Flex26Props} {...Flex26Cb} {...Flex26IoProps}>
<Flex className="p-Home Flex70" {...Flex70Props} {...Flex70Cb} {...Flex70IoProps}>
<Button className="p-Home Button54" {...Button54Props} {...Button54Cb} {...Button54IoProps}/>
<Image className="p-Home Image55" {...Image55Props} {...Image55Cb} {...Image55IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex33" {...Flex33Props} {...Flex33Cb} {...Flex33IoProps}>
<Div className="p-Home Div27" {...Div27Props} {...Div27Cb} {...Div27IoProps}>
<TextBox className="p-Home TextBox35" {...TextBox35Props} {...TextBox35Cb} {...TextBox35IoProps}/>
<TextBox className="p-Home TextBox33" {...TextBox33Props} {...TextBox33Cb} {...TextBox33IoProps}/>
<Flex className="p-Home Flex72" {...Flex72Props} {...Flex72Cb} {...Flex72IoProps}>
<Button className="p-Home Button56" {...Button56Props} {...Button56Cb} {...Button56IoProps}/>
<Image className="p-Home Image57" {...Image57Props} {...Image57Cb} {...Image57IoProps}/>
</Flex>
</Div>
<Image className="p-Home Image23" {...Image23Props} {...Image23Cb} {...Image23IoProps}/>
<Div className="p-Home Div26" {...Div26Props} {...Div26Cb} {...Div26IoProps}>
<Image className="p-Home Image22" {...Image22Props} {...Image22Cb} {...Image22IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex35" {...Flex35Props} {...Flex35Cb} {...Flex35IoProps}>
<Flex className="p-Home Flex36" {...Flex36Props} {...Flex36Cb} {...Flex36IoProps}>
<TextBox className="p-Home TextBox36" {...TextBox36Props} {...TextBox36Cb} {...TextBox36IoProps}/>
<Flex className="p-Home Flex74" {...Flex74Props} {...Flex74Cb} {...Flex74IoProps}>
<Button className="p-Home Button58" {...Button58Props} {...Button58Cb} {...Button58IoProps}/>
<Image className="p-Home Image59" {...Image59Props} {...Image59Cb} {...Image59IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex39" {...Flex39Props} {...Flex39Cb} {...Flex39IoProps}>
<Flex className="p-Home Flex40" {...Flex40Props} {...Flex40Cb} {...Flex40IoProps}>
<Div className="p-Home Div28" {...Div28Props} {...Div28Cb} {...Div28IoProps}>
<Image className="p-Home Image25" {...Image25Props} {...Image25Cb} {...Image25IoProps}/>
<TextBox className="p-Home TextBox37" {...TextBox37Props} {...TextBox37Cb} {...TextBox37IoProps}/>
<TextBox className="p-Home TextBox38" {...TextBox38Props} {...TextBox38Cb} {...TextBox38IoProps}/>
</Div>
<Div className="p-Home Div35" {...Div35Props} {...Div35Cb} {...Div35IoProps}>
<Image className="p-Home Image31" {...Image31Props} {...Image31Cb} {...Image31IoProps}/>
<TextBox className="p-Home TextBox50" {...TextBox50Props} {...TextBox50Cb} {...TextBox50IoProps}/>
<TextBox className="p-Home TextBox49" {...TextBox49Props} {...TextBox49Cb} {...TextBox49IoProps}/>
</Div>
<Div className="p-Home Div36" {...Div36Props} {...Div36Cb} {...Div36IoProps}>
<Image className="p-Home Image32" {...Image32Props} {...Image32Cb} {...Image32IoProps}/>
<TextBox className="p-Home TextBox52" {...TextBox52Props} {...TextBox52Cb} {...TextBox52IoProps}/>
<TextBox className="p-Home TextBox51" {...TextBox51Props} {...TextBox51Cb} {...TextBox51IoProps}/>
</Div>
<Div className="p-Home Div37" {...Div37Props} {...Div37Cb} {...Div37IoProps}>
<Image className="p-Home Image33" {...Image33Props} {...Image33Cb} {...Image33IoProps}/>
<TextBox className="p-Home TextBox54" {...TextBox54Props} {...TextBox54Cb} {...TextBox54IoProps}/>
<TextBox className="p-Home TextBox53" {...TextBox53Props} {...TextBox53Cb} {...TextBox53IoProps}/>
</Div>
<Div className="p-Home Div38" {...Div38Props} {...Div38Cb} {...Div38IoProps}>
<Image className="p-Home Image34" {...Image34Props} {...Image34Cb} {...Image34IoProps}/>
<TextBox className="p-Home TextBox56" {...TextBox56Props} {...TextBox56Cb} {...TextBox56IoProps}/>
<TextBox className="p-Home TextBox55" {...TextBox55Props} {...TextBox55Cb} {...TextBox55IoProps}/>
</Div>
<Div className="p-Home Div39" {...Div39Props} {...Div39Cb} {...Div39IoProps}>
<Image className="p-Home Image35" {...Image35Props} {...Image35Cb} {...Image35IoProps}/>
<TextBox className="p-Home TextBox58" {...TextBox58Props} {...TextBox58Cb} {...TextBox58IoProps}/>
<TextBox className="p-Home TextBox57" {...TextBox57Props} {...TextBox57Cb} {...TextBox57IoProps}/>
</Div>
</Flex>
</Flex>
<Flex className="p-Home Flex43" {...Flex43Props} {...Flex43Cb} {...Flex43IoProps}>
<Flex className="p-Home Flex42" {...Flex42Props} {...Flex42Cb} {...Flex42IoProps}>
<TextBox className="p-Home TextBox59" {...TextBox59Props} {...TextBox59Cb} {...TextBox59IoProps}/>
<Flex className="p-Home Flex76" {...Flex76Props} {...Flex76Cb} {...Flex76IoProps}>
<Button className="p-Home Button60" {...Button60Props} {...Button60Cb} {...Button60IoProps}/>
<Image className="p-Home Image61" {...Image61Props} {...Image61Cb} {...Image61IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex45" {...Flex45Props} {...Flex45Cb} {...Flex45IoProps}>
<Div className="p-Home Div41" {...Div41Props} {...Div41Cb} {...Div41IoProps}>
<TextBox className="p-Home TextBox61" {...TextBox61Props} {...TextBox61Cb} {...TextBox61IoProps}/>
<TextBox className="p-Home TextBox62" {...TextBox62Props} {...TextBox62Cb} {...TextBox62IoProps}/>
</Div>
<Div className="p-Home Div40" {...Div40Props} {...Div40Cb} {...Div40IoProps}>
<Image className="p-Home Image38" {...Image38Props} {...Image38Cb} {...Image38IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex47" {...Flex47Props} {...Flex47Cb} {...Flex47IoProps}>
<Div className="p-Home Div43" {...Div43Props} {...Div43Cb} {...Div43IoProps}>
<TextBox className="p-Home TextBox64" {...TextBox64Props} {...TextBox64Cb} {...TextBox64IoProps}/>
<TextBox className="p-Home TextBox65" {...TextBox65Props} {...TextBox65Cb} {...TextBox65IoProps}/>
</Div>
<Div className="p-Home Div42" {...Div42Props} {...Div42Cb} {...Div42IoProps}>
<Image className="p-Home Image40" {...Image40Props} {...Image40Cb} {...Image40IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex49" {...Flex49Props} {...Flex49Cb} {...Flex49IoProps}>
<Flex className="p-Home Flex50" {...Flex50Props} {...Flex50Cb} {...Flex50IoProps}>
<Div className="p-Home Div44" {...Div44Props} {...Div44Cb} {...Div44IoProps}>
<TextBox className="p-Home TextBox66" {...TextBox66Props} {...TextBox66Cb} {...TextBox66IoProps}/>
<Flex className="p-Home Flex51" {...Flex51Props} {...Flex51Cb} {...Flex51IoProps}>
<TextBox className="p-Home TextBox68" {...TextBox68Props} {...TextBox68Cb} {...TextBox68IoProps}/>
<TextBox className="p-Home TextBox69" {...TextBox69Props} {...TextBox69Cb} {...TextBox69IoProps}/>
</Flex>
<Div className="p-Home Div46" {...Div46Props} {...Div46Cb} {...Div46IoProps}>
<TextBox className="p-Home TextBox70" {...TextBox70Props} {...TextBox70Cb} {...TextBox70IoProps}/>
</Div>
</Div>
<Div className="p-Home Div45" {...Div45Props} {...Div45Cb} {...Div45IoProps}>
<Image className="p-Home Image41" {...Image41Props} {...Image41Cb} {...Image41IoProps}/>
</Div>
</Flex>
</Flex>
<Flex className="p-Home Flex52" {...Flex52Props} {...Flex52Cb} {...Flex52IoProps}>
<Flex className="p-Home Flex53" {...Flex53Props} {...Flex53Cb} {...Flex53IoProps}>
<Div className="p-Home Div47" {...Div47Props} {...Div47Cb} {...Div47IoProps}>
<TextBox className="p-Home TextBox74" {...TextBox74Props} {...TextBox74Cb} {...TextBox74IoProps}/>
<TextBox className="p-Home TextBox73" {...TextBox73Props} {...TextBox73Cb} {...TextBox73IoProps}/>
<Input className="p-Home Input1" {...Input1Props} {...Input1Cb} {...Input1IoProps}/>
<Flex className="p-Home Flex56" {...Flex56Props} {...Flex56Cb} {...Flex56IoProps}>
<Button className="p-Home Button2" {...Button2Props} {...Button2Cb} {...Button2IoProps}/>
<Image className="p-Home Image42" {...Image42Props} {...Image42Cb} {...Image42IoProps}/>
</Flex>
</Div>
<Flex className="p-Home Flex54" {...Flex54Props} {...Flex54Cb} {...Flex54IoProps}>
<Div className="p-Home Div49" {...Div49Props} {...Div49Cb} {...Div49IoProps}>
<TextBox className="p-Home TextBox75" {...TextBox75Props} {...TextBox75Cb} {...TextBox75IoProps}/>
</Div>
<Flex className="p-Home Flex57" {...Flex57Props} {...Flex57Cb} {...Flex57IoProps}>
<Div className="p-Home Div50" {...Div50Props} {...Div50Cb} {...Div50IoProps}>
<Button className="p-Home Button5" {...Button5Props} {...Button5Cb} {...Button5IoProps}/>
<Button className="p-Home Button6" {...Button6Props} {...Button6Cb} {...Button6IoProps}/>
<Button className="p-Home Button7" {...Button7Props} {...Button7Cb} {...Button7IoProps}/>
<Button className="p-Home Button8" {...Button8Props} {...Button8Cb} {...Button8IoProps}/>
<Button className="p-Home Button9" {...Button9Props} {...Button9Cb} {...Button9IoProps}/>
<Button className="p-Home Button10" {...Button10Props} {...Button10Cb} {...Button10IoProps}/>
</Div>
<Div className="p-Home Div51" {...Div51Props} {...Div51Cb} {...Div51IoProps}>
<Button className="p-Home Button11" {...Button11Props} {...Button11Cb} {...Button11IoProps}/>
<Button className="p-Home Button12" {...Button12Props} {...Button12Cb} {...Button12IoProps}/>
<Button className="p-Home Button13" {...Button13Props} {...Button13Cb} {...Button13IoProps}/>
<Button className="p-Home Button17" {...Button17Props} {...Button17Cb} {...Button17IoProps}/>
<Button className="p-Home Button21" {...Button21Props} {...Button21Cb} {...Button21IoProps}/>
<Button className="p-Home Button18" {...Button18Props} {...Button18Cb} {...Button18IoProps}/>
<Button className="p-Home Button19" {...Button19Props} {...Button19Cb} {...Button19IoProps}/>
</Div>
<Div className="p-Home Div53" {...Div53Props} {...Div53Cb} {...Div53IoProps}>
<Button className="p-Home Button22" {...Button22Props} {...Button22Cb} {...Button22IoProps}/>
<Button className="p-Home Button23" {...Button23Props} {...Button23Cb} {...Button23IoProps}/>
<Button className="p-Home Button24" {...Button24Props} {...Button24Cb} {...Button24IoProps}/>
<Button className="p-Home Button25" {...Button25Props} {...Button25Cb} {...Button25IoProps}/>
<Button className="p-Home Button26" {...Button26Props} {...Button26Cb} {...Button26IoProps}/>
</Div>
</Flex>
</Flex>
<Flex className="p-Home Flex58" {...Flex58Props} {...Flex58Cb} {...Flex58IoProps}>
<TextBox className="p-Home TextBox127" {...TextBox127Props} {...TextBox127Cb} {...TextBox127IoProps}/>
<Button className="p-Home Button29" {...Button29Props} {...Button29Cb} {...Button29IoProps}/>
<Button className="p-Home Button30" {...Button30Props} {...Button30Cb} {...Button30IoProps}/>
<Button className="p-Home Button31" {...Button31Props} {...Button31Cb} {...Button31IoProps}/>
<Button className="p-Home Button32" {...Button32Props} {...Button32Cb} {...Button32IoProps}/>
<Button className="p-Home Button33" {...Button33Props} {...Button33Cb} {...Button33IoProps}/>
<Button className="p-Home Button34" {...Button34Props} {...Button34Cb} {...Button34IoProps}/>
<TextBox className="p-Home TextBox128" {...TextBox128Props} {...TextBox128Cb} {...TextBox128IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex60" {...Flex60Props} {...Flex60Cb} {...Flex60IoProps}>
<Flex className="p-Home Flex61" {...Flex61Props} {...Flex61Cb} {...Flex61IoProps}>
<Flex className="p-Home Flex62" {...Flex62Props} {...Flex62Cb} {...Flex62IoProps}>
<TextBox className="p-Home TextBox130" {...TextBox130Props} {...TextBox130Cb} {...TextBox130IoProps}/>
<TextBox className="p-Home TextBox131" {...TextBox131Props} {...TextBox131Cb} {...TextBox131IoProps}/>
<TextBox className="p-Home TextBox132" {...TextBox132Props} {...TextBox132Cb} {...TextBox132IoProps}/>
<TextBox className="p-Home TextBox134" {...TextBox134Props} {...TextBox134Cb} {...TextBox134IoProps}/>
</Flex>
<Flex className="p-Home Flex63" {...Flex63Props} {...Flex63Cb} {...Flex63IoProps}>
<Image className="p-Home Image43" {...Image43Props} {...Image43Cb} {...Image43IoProps}/>
<Image className="p-Home Image44" {...Image44Props} {...Image44Cb} {...Image44IoProps}/>
<Image className="p-Home Image45" {...Image45Props} {...Image45Cb} {...Image45IoProps}/>
<Image className="p-Home Image46" {...Image46Props} {...Image46Cb} {...Image46IoProps}/>
<Image className="p-Home Image47" {...Image47Props} {...Image47Cb} {...Image47IoProps}/>
<Image className="p-Home Image48" {...Image48Props} {...Image48Cb} {...Image48IoProps}/>
<Image className="p-Home Image49" {...Image49Props} {...Image49Cb} {...Image49IoProps}/>
</Flex>
</Flex>
</Flex>
  </>);
}
