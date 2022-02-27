import { Link } from "react-router-dom"
import Card from "../components/Shared/Card"

function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h1>About</h1>
            <p>This is a react app for the purpose of gathering feedback</p>
            <p>Version: 1.0.0</p>

            <p>
                <Link to="/">Back to Home</Link>
            </p>
        </div>
    </Card>
  )
}

export default AboutPage