import Col from 'react-bootstrap/Col';

function ArticleTeaser(props) {
    const dish=props.recipe
    return(
        <Col xs lg="3">
            <img src={dish.image}  width= '200' height= '200' ></img>
            <p>{dish.label}</p>
        </Col>
    )
}
export default ArticleTeaser;