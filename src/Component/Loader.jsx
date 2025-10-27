import { ClipLoader } from "react-spinners";

export default function Loader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <ClipLoader color="#36d7b7" size={80} />
    </div>
  );
}
