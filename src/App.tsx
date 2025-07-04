import { FC } from 'react'
import { Routes } from 'react-router-dom'
import { usePageIdentification } from './hooks/usePageIdentification'
import { observer } from 'mobx-react'

const App: FC = () => {
    usePageIdentification()

    return (
        <div className="app-wrapper">
            <Routes />
        </div>

    )
}

export default observer(App)