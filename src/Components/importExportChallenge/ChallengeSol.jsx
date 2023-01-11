import { add, divide, multiply, subtract } from "./Calculator";
function ImportExportSolution() {
  return (
    <div>
      <p>{add(1, 2)}</p>
      <p>{multiply(2, 3)}</p>
      <p>{subtract(7, 2)}</p>
      <p>{divide(5, 2)}</p>
    </div>
  );
}
export default ImportExportSolution;
