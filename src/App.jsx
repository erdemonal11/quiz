import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Setting from "./pages/Setting";
import Question from "./pages/Question";
import Final from "./pages/Final";
import { Box, Container, Typography } from "@mui/material";

function App() {
  return (
    <Router>
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Typography variant="h2" fontWeight="bold">
                  ¿Quiz?
                  </Typography>
                  <Setting />
                </>
              }
            />
            <Route path="/quest" element={<Question />} />
            <Route path="/score" element={<Final />} />
          </Routes>
        </Box>
      </Container>
    </Router>
  );
}

export default App;
