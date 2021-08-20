
import { bool, string } from "prop-types"
import { Link as LinkRouterDom } from "react-router-dom"

const RenderLinkRouter = ({ children, href, ...props }) => 
    <LinkRouterDom to={href} {...props}>
        {children}
    </LinkRouterDom>

const RenderLink = ({children, ...props}) => <a {...props}>{children}</a>

const Link = ({
    children,
    className = '',
    href = '',
    router = false,
    ...props
}) => {
    className += ' LINK'

    const Element = router ? RenderLinkRouter : RenderLink
    return (
        <Element {...props} {...{ className, href }}>
            {children}
        </Element>
    )
}

Link.propTypes = {
    className: string,
    href: string,
    router: bool,
}

export { Link }