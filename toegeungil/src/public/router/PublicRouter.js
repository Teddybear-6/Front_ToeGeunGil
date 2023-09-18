import Table from 'react-bootstrap/Table';

function StripedRowExample() {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>작성자</th>
          <th>글제목</th>
          <th>내 용</th>
          <th>작성일</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>운영자</td>
          <td>운영자가 글씁니다.</td>
          <td>하이하이</td>
          <td>2023-09-11</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default StripedRowExample;