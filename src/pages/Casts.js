import { useContext } from "react"
import { Table } from "react-bootstrap"
import FilmsContext from "../utils/FilmsContext"

import CastCell from "../components/CastCell"

function Casts() {
  const { casts } = useContext(FilmsContext)
  return (
    <Table bordered hover style={{ tableLayout: "fixed" }}>
      <thead>
        <tr>
          <th style={{ width: "9%" }}>#</th>
          <th style={{ width: "18%" }}>firstName</th>
          <th style={{ width: "18%" }}>lastName</th>
          <th style={{ width: "18%" }}>photo</th>
          <th style={{ width: "9%" }}>type</th>
        </tr>
      </thead>
      <tbody>
        {casts.map(cast => (
          <CastCell key={cast._id} cast={cast} />
        ))}
      </tbody>
    </Table>
  )
}

export default Casts
