import Header from "./components/Header";
import LeftSideMenu from "./components/LeftSideMenu";
import { AuthProvider } from "./context/AuthProvider";
import SideBar from "./layout/SideBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LandinPage } from "./paginas/LandinPage";
import Auth from "./layout/Auth";
import Login from "./paginas/Login";
import ForgotPassword from "./paginas/Forgot";
import Register from "./paginas/Register";

// In App.jsx (located in the pages folder)
function App() {
  return (
    <>
      <BrowserRouter>

        <AuthProvider>

          <Routes>

            <Route index element={<LandinPage />} />

            <Route path='/' element={<Auth />}>
              <Route path='login' element={<Login />} />
              <Route path='recovery-password' element={<ForgotPassword/>}/>

              {<Route path='register' element={<Register/>}/> 
                /*<Route path='confirmar/:token' element={<Confirmar/>}/>
                <Route path='recuperar-password/:token' element={<Restablecer/>}/> 
                <Route path='*' element={<NotFound />} />*/}

            </Route>

            {/* <Route  path='dashboard/*' element={
    <PrivateRoute>
      <Routes>
          <Route element={<Dashboard />}>
            <Route index element={<Perfil />} />
            <Route path='listar' element={<Listar />} />
            <Route path='visualizar/:id' element={<Visualizar />} />
            <Route path='crear' element={<Crear />} />
            <Route path='actualizar/:id' element={<Actualizar />} />
          </Route>
    </Routes>
    </PrivateRoute>
  }/> */}

          </Routes>

        </AuthProvider>

      </BrowserRouter>
    </>
  );
}

export default App;
