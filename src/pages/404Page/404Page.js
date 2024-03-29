import { Link } from 'react-router-dom';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';

const Page404 = () => {
    return (
        <div style={ { height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' } }>
            <ErrorMessage/>
            <p style={ { 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px' } }>Page dosn't exist</p>
            <Link style={ { 'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '30px' } } to='/'>Back to main page</Link>
        </div>
    )
}

export default Page404;