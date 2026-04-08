import { useState, useEffect, useRef } from "react"

function BioDiv() {
  const [currentQuote, setCurrentQuote] = useState("")
  const currentQuoteRef = useRef("")
  const isRunning = useRef(false)

  const quotes = [
    "c++ > c",
    "rust, raw pointers are better than your borrow checker",
    "i use arch btw",
    "did i tell you i use arch (btw)?",
    "i am both smarter and dumber than you think, dont ever estimate me",
    "i got a website!",
    "404 - skill not found",
    "d1 ken carson and destroy lonely glazer",
    "crazy?",
    "i was crazy once",
    "they locked me in a room",
    "a rubber room",
    "a rubber room with rats",
    "rats make me crazy",
    "kernel level anticheat is a fancy term for big time spyware",
    "microslop copilot is more like that one annoying flight attendant",
    "multiple monitors are overrated when you can switch desktops",
    "i <3 scratch"
  ]

  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

  const updateQuote = async () => {
    let quoteTemp = ""
    do {
      quoteTemp = quotes[Math.floor(Math.random() * quotes.length)]
    } while (quoteTemp === currentQuoteRef.current)

    while (currentQuoteRef.current.length > 0) {
      currentQuoteRef.current = currentQuoteRef.current.slice(0, -1)
      setCurrentQuote(currentQuoteRef.current)
      await sleep(50)
    }

    await sleep(100)

    while (currentQuoteRef.current.length < quoteTemp.length) {
      currentQuoteRef.current = quoteTemp.slice(0, currentQuoteRef.current.length + 1)
      setCurrentQuote(currentQuoteRef.current)
      await sleep(50)
    }

    setTimeout(updateQuote, 3000)
  }

  useEffect(() => {
    if (isRunning.current) return
    isRunning.current = true
    updateQuote()
  }, [])

  return (
    <div id="bio-div" className="div-base div-constrained">

      <img
        src="https://raw.githubusercontent.com/hansolo1000falcon/files/main/pfp.png"
        alt="My profile picture"
        width="150"
        height="150"
      />
      <div>
        <h1>HanSolo1000Falcon</h1>
        <a href="/about/me"><h3>about me</h3></a>
        <h3>{currentQuote}</h3>
      </div>
    </div>
  )
}

export default BioDiv
