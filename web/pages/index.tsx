interface HomeProps {
  count: number;
}

export default function Home(props: HomeProps) {

  return (
    <h1>Contagem: {props.count}</h1>
  )
}

export const getServerSideProps = async () => {
  const response = await fetch('https://3333-jezielalmei-nlwcopaigni-9mui4h650fd.ws-us73.gitpod.io/pools/count')
  const data = await response.json()

  console.log(data)

  return {
    props: {
      count: data.count,
    }
  }
}