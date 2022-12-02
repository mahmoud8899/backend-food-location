import { Spinner } from 'react-bootstrap'



export default function LoadingScreen() {





    return <Spinner animation="border" role="status" variant="danger">
        <span className="visually-hidden">Loading...</span>
    </Spinner>
}


