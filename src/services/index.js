import { useQuery } from 'react-query'
import { createGlobalHook } from '@devhammed/use-global-hook'


export const servicesStore = createGlobalHook('servicesStore', () => {
    const { isLoading, error, data, refetch } = useQuery('repoData', () =>
        fetch('http://localhost:3000/api/products/').then(res =>
        res.json()
    ))

    return { isLoading, error, data, refetch } 
})