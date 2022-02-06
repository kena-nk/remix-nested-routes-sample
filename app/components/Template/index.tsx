import {
    Box,
} from '@chakra-ui/react'
import Header from '../Header'
import Tab from '../Tab';

type TemplateProps = {
    children: JSX.Element;
}


export default function index({ children }: TemplateProps) {
    return (
        <Box px="40px">
            <Header />
            <Tab />
            {children}
        </Box>
    )
}
