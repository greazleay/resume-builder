import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    components: {
        Divider: {
            sizes: {
                md: {
                    px: '20px'
                }
            }
        }
    }
})

export default theme