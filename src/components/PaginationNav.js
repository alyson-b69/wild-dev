import React from "react"
import { Link } from "gatsby"
import { Button } from "react-bootstrap"

const PaginationNav = props => {
  const pageActu = props.pageContext.currentPage
  const numPages = props.pageContext.numPages
  const slug = props.pageContext.slug

  return (
    <>
      {numPages !== 1 ? (
        <nav className="pagination">
          {pageActu === 1 ? (
            <>
              <Button className="isActu"> 1 </Button>
              <Link to={`../${slug}/2`}>
                <Button> 2 </Button>
              </Link>
              {numPages > 2 ? (
                <Link to={`../${slug}/3`}>
                  <Button> 3 </Button>
                </Link>
              ) : (
                ""
              )}
              {numPages > 3 ? (
                <Link to={`../${slug}/4`}>
                  <Button> 4 </Button>
                </Link>
              ) : (
                ""
              )}
              {numPages > 4 ? (
                <>
                  <span> ... </span>
                  <Link to={`../${slug}/${numPages}`}>
                    <Button> {numPages} </Button>
                  </Link>
                </>
              ) : (
                ""
              )}
            </>
          ) : (
            <>
              <Link to={`../`}>
                <Button>1</Button>
              </Link>

              {pageActu > 3 ? (
                <>
                  <span> ... </span>
                  <Link to={`../${pageActu - 1}`}>
                    <Button> {pageActu - 1} </Button>
                  </Link>
                </>
              ) : (
                <>
                  {pageActu !== 2 ? (
                    <Link to={`../${pageActu - 1}`}>
                      <Button> {pageActu - 1} </Button>
                    </Link>
                  ) : (
                    ""
                  )}
                </>
              )}

              <Button className="isActu"> {pageActu} </Button>

              {pageActu <= numPages - 2 ? (
                <>
                  <Link to={`../${pageActu + 1}`}>
                    <Button> {pageActu + 1} </Button>
                  </Link>

                  {pageActu === numPages - 2 ? (
                    <>
                      <Link to={`../${numPages}`}>
                        <Button> {numPages} </Button>
                      </Link>
                    </>
                  ) : (
                    <>
                      <span> ... </span>
                      <Link to={`../${numPages}`}>
                        <Button> {numPages} </Button>
                      </Link>
                    </>
                  )}
                </>
              ) : (
                <>
                  {pageActu <= numPages - 1 ? (
                    <Link to={`../${numPages}`}>
                      <Button> {numPages} </Button>
                    </Link>
                  ) : (
                    ""
                  )}
                </>
              )}
            </>
          )}
        </nav>
      ) : (
        ""
      )}
    </>
  )
}

export default PaginationNav

