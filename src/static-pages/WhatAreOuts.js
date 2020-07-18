import React from "react";


class WhatAreOuts extends React.Component {
  render() {
    return (
      <React.Fragment>
         <div class="col">
                    <h1 class="text-center main-font-family">
                        What are outs?
                    </h1>
                    <p>First things first. If you don't know how to play poker, this website is going to
                        be pretty much useless. If you're here and don't know anything about poker, you're either a
                        friend or family that I've sent this to, or you saw this website on some CV. In that case,
                        welcome, and I suggest you <a href="https://www.pokerlistings.com/how-to-play-poker">learn how
                            to play poker</a> before continuing. It's a fun game to play with friends, even if you don't
                        gamble!
                    </p>
                    <p class="self-justify-left body-font-family">Imagine the following scenario. You're playing a game
                        of poker, and you think you have a bad hand.</p>


                    <div class="container cardHolder pb-1">
                        <h4 class="text-center mb-0 main-font-family">FLOP</h4>
                        <div class="mx-auto justify-content-center row">
                            <div class="col px-1 d-flex justify-content-center">
                                <img class="card border border-dark large-card-img"
                                    src={require('../assets/cards/CLUB-13-KING.svg')}/>
                            </div>
                            <div class="col px-1 d-flex justify-content-center">
                                <img class="card border border-dark large-card-img"
                                    src={require('../assets/cards/DIAMOND-2.svg')}/>
                            </div>
                            <div class="col px-1 d-flex justify-content-center">
                                <img class="card border border-dark large-card-img"
                                    src={require('../assets/cards/HEART-12-QUEEN.svg')}/>
                            </div>
                            <div class="col px-1 d-flex justify-content-center">
                                <img class="card border border-dark large-card-img"
                                    src={require('../assets/cards/RED_BACK.svg')}/>
                            </div>
                            <div class="col px-1 d-flex justify-content-center">
                                <img class="card border border-dark large-card-img"
                                    src={require('../assets/cards/RED_BACK.svg')}/>
                            </div>
                        </div>
                    </div>

                    <div class="container cardHolder pb-1">
                        <h4 class="text-center mb-0 main-font-family">HOLE</h4>
                        <div class="mx-auto justify-content-center row float right">
                            <div class="col px-1 d-flex justify-content-center">
                                <img class="card border border-dark hole-card-img"
                                    src={require('../assets/cards/CLUB-10.svg')}/>
                                <div class="px-1"></div>
                                <img class="card border border-dark hole-card-img"
                                    src={require('../assets/cards/CLUB-9.svg')}/>
                            </div>


                        </div>
                    </div>

                    <p>Wow, that sucks. <br/><br/>No flush, no straight, not even a pair. Not yet anyways. <br/><br/>
                        Obviously, there are 2
                        more cards
                        left to see, and they might give you a better hand than you currently have. You might get a 10,
                        giving you a 10 pair. Or a Jack, giving you a straight. <br/><br/>But how likely is this?

                        You can measure the likelihood of your hand improving by counting the number of cards still left in the deck that might improve your hand to a winning hand. These cards
                        are called <strong>outs</strong>.
                    </p>

                    <h4 class="main-font-family">
                        Well, how do you count outs?
                    </h4>

                    <p>Counting outs is both an art and a science. For example, I might ask you:
                        How many cards left in the deck would improve your hand
                        to a straight? After looking at the cards and realising that only another Jack is needed to
                        complete a straight, you might say 'There are 4 jacks we haven't seen left in the deck, so 4
                        outs?

                        <br/><br/>That can be both right and wrong. If none of the other players have a Jack, you would be
                        right. If the 4 Jacks are all with other players, you would be completely wrong. You can never
                        know for sure what your opponents have, and therefore never consider the cards in your
                        mathematical calculations.

                        <br/><br/>Counting outs also depends on what cards you think your opponent has. If your opponent
                        is not
                        betting too much, you might think to yourself 'Huh, this guy probably doesn't have anything' and
                        be confident that you could beat him with just a pair, in which case any 10 or 9 would be
                        considered outs. If you're playing more cautiously, you might only be confident of success when
                        you have a straight, in which case your outs are only the 4 Jacks left in the deck.<br/><br/>

                    <h4 class="main-font-family">
                        Huh, all this seems very guess-work based
                    </h4>
                    This uncertainty is a feature, not a bug. Poker is a game about making good decisions
                    using limited information. By getting good at counting outs, you will gain another tool with which
                    you can make good decisions.

                    <br/><br/>There is a lot more to be said about counting outs, but there are other places on the
                    internet
                    where <a href="https://www.pokerlistings.com/strategy/calculating-outs-a-beginners-guide">it is
                        explained much more in depth </a>

                    <br/><br/>I hope you have fun using this tool I've created. It allows you to practice counting outs in
                    a wide variety of situations and hopefully improve your poker game. If you want to get in touch to
                    report a bug, offer advice on improving the tool or send a joke or job, do so at <a
                        href="ibrahim.miraj@mail.mcgill.ca">my email</a>

                    </p>





                </div>
      </React.Fragment>
    );
  }
}

export default WhatAreOuts;

  
  
  