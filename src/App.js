import About from "./About"
import Home from './Home';
import Users from './Users';
import Nav from './Nav'
import NotFoundPage from './NotFoundPage'
import { Route,Routes, useSearchParams } from "react-router-dom";
import * as React from "react";


function App() {

  let [searchParams,setSearchParams] = useSearchParams();
  function handleSubmit(event) {
    event.preventDefault();
    let params = serializeFormQuery(event.target);
    setSearchParams(params);


    function serializeFormQuery(form) {
      const formData = new FormData(form); ///FormData, содержащий пары ключ-значение, представляющие данные формы
      const params = new URLSearchParams(); ///сформировать строку запроса
    
      for (const [key, value] of formData.entries()) {
        params.append(key, value);
      }
    
      return params.toString();
    }
  }
  return (
    <div>
{/*   
<Nav/>
     */}
   {/* <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />}>
            <Route path="new" element={<NewUser />} />
            <Route path=":userId" element={<User />}>
              <Route index element={<UserIndex />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router> */}

<form onSubmit={handleSubmit}>
      <label>
        Name:
        <input name="name" type="text" />
      </label>
      <br />
      <label>
        Age:
        <input name="age" type="number" />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default App;
