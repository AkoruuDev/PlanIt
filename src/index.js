import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "./provider/auth";

ReactDOM.render(
    <AuthProvider>
        <App />
    </AuthProvider>,
    document.getElementById("root")
)