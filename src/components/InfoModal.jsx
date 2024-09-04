function InfoModal({ onClose }) {
  return (
    <div
      style={{
        position: 'fixed',
        display: 'flex',
        padding: '2rem',
        inset: 0,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backdropFilter: 'blur(2px)',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          borderRadius: '0.3rem',
          boxShadow: '0 0 10px 7px rgba(0,0,0,0.2)',
          padding: '2rem',
          background: '#1e1e1e',
          position: 'relative',
          boxSizing: 'border-box',
          height: 500,
          overflowY: 'scroll',
          maxWidth: 720,
        }}
      >
        <button
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            padding: '0.25rem',
          }}
          aria-label='Close'
          onClick={onClose}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 384 512'
            style={{ color: 'white' }}
            width={16}
            height={16}
          >
            <path
              fill='currentColor'
              d='M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3l105.4 105.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256z'
            />
          </svg>
        </button>
        <div>
          <p>
            How Do We Play?
            <br />
            Object Of The Game:
          </p>
          <p>To be the player who BANKs the most points by the end of 20 rounds!</p>
          <p>&nbsp;</p>
          <p>Starting Out:</p>
          <p>
            Insert all players' names into the BANK app PLAYERS screen and choose a Scorekeeper
            (BANKER) who will manage the BANK Game App.
          </p>
          <p>
            Each player will need access to two dice for their turn. &nbsp;Choose between 10, 15, or
            20 rounds. &nbsp;Most play 20.
          </p>
          <p>&nbsp;</p>
          <p>Getting the Game Rolling:</p>
          <p>
            The first person rolls both dice at once and calls out what their dice numbers add up
            to: (i.e. a two on one dice + a three on the other adds up to 5 points)
          </p>
          <p>
            The BANKER presses that number onto the screen pad. Then, the person next to the first
            player rolls and does the same thing.
          </p>
          <p>
            MOST PEOPLE SIT AROUND A TABLE TO PLAYAND ROTATE PLAYERS SEQUENTIALLY GOING CLOCKWISE.
          </p>
          <p>&nbsp;</p>
          <p>Important Dice Rules:</p>
          <p>
            As each person rolls, the BANKER adds their score to the BANK total to increase the
            number in the BANK. Rolling a 7 ends a round. &nbsp;
          </p>
          <p>
            Rolling "doubles" (the dice land on the same number on both dice) doubles the cumulative
            score on the BANK screen.
          </p>
          <p>
            The first three rollers have an advantage because if they roll a 7 (that would typically
            end the game), their 7s are worth 70 BANK points. &nbsp;
          </p>
          <p>
            However, their disadvantage is that if they roll "doubles," the score added to the BANK
            is only face value on the dice --
          </p>
          <p>i.e. Two ones = Two points, Two fives = Ten points</p>
          <p>
            After the first three dice rollers (so starting with the fourth roll/person), rolling a
            7 will end a round and rolling "doubles" will double the cumulative score,
          </p>
          <p>which is an advantage to everyone thereafter.</p>
          <p>&nbsp;</p>
          <p>Scoring:</p>
          <p>
            At any point, any player (regardless of whose turn it is) can call out "BANK" which
            automatically pauses the game. &nbsp;
          </p>
          <p>
            The BANKER then clicks on the BANK tile on the app and clicks on the person's name who
            called out BANK.
          </p>
          <p>
            The app will then add the score from the BANK cumulative total to that person's personal
            score.
          </p>
          <p>
            There is no limit to how many people BANK the points on the screen. However, once
            someone has BANKED a score, they will sit out the remainder of that round. &nbsp;They
            can no longer roll to increase the number of the BANK score and they can no longer call
            out BANK during that particular round.
          </p>
          <p>Each player can only BANK points once per round.</p>
          <p>
            Those who do not call out BANK within a round will not add any BANK scores to their
            personal BANK accounts at the end of that round. &nbsp;
          </p>
          <p>
            The points they have already accumulated from other rounds will remain the same until
            they BANK more points in another round.
          </p>
          <p>
            The cumulative BANK score will continue to increase as players continue to roll in
            sequence as long as there are still players who have not yet called out BANK and as long
            as no one has rolled a 7.
          </p>
          <p>&nbsp;</p>
          <p>Ending A Round:</p>
          <p>
            Once a 7 is rolled OR all players have BANKed points into their personal accounts, the
            round will end and another will begin until 10, 15, or 20 rounds are played.
          </p>
          <p>
            At the beginning of a new round, everyone regains their ability to roll and call out
            BANK again.
          </p>
          <p>&nbsp;</p>
        </div>
      </div>
    </div>
  );
}

export default InfoModal;
