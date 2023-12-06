const Row = ({ number, score, name, code }) => {
  return (
    <div className="table-row">
      <div className="table-data number">{number}</div>
      <div className="table-data name">{name}</div>
      <div className="table-data score">{score}</div>
      <div className="table-data code">{code}</div>
    </div>
  )
}

export default Row