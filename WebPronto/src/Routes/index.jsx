import {Route, Routes} from 'react-router'
import { Home } from '../Pages/Home'
import { AllTemplates } from '../Pages/AllTemplates'

export const Router = () => {
    return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Alltemplates" element={<AllTemplates />} />
        </Routes>
    )
}