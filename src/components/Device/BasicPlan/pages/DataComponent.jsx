
const CO2data = [
    { id: 1, updatetime: '2023/03/22 15:20:55', startoption: '1', starttimeOpt1: '10:00', starttimeOpt2: '0', endoption: '2', endtimeOpt1: '00:00', endtimeOpt2: '10', stop: '445.35', restart: '234.55', action1: '5', action2: '10' },
    { id: 2, updatetime: '2023/03/22 15:20:55', startoption: '2', starttimeOpt1: '00:00', starttimeOpt2: '10', endoption: '3', endtimeOpt1: '00:00', endtimeOpt2: '20', stop: '445.35', restart: '234.55', action1: '5', action2: '10' },
    { id: 3, updatetime: '2023/03/22 15:20:55', startoption: '3', starttimeOpt1: '00:00', starttimeOpt2: '15', endoption: '1', endtimeOpt1: '16:00', endtimeOpt2: '0', stop: '445.35', restart: '234.55', action1: '5', action2: '15' },
    { id: 4, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', endoption: '', endtimeOpt1: '00:00', endtimeOpt2: '0', stop: '0', restart: '0', action1: '0', action2: '0' },
    { id: 5, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', endoption: '', endtimeOpt1: '00:00', endtimeOpt2: '0', stop: '0', restart: '0', action1: '0', action2: '0' },
    { id: 6, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', endoption: '', endtimeOpt1: '00:00', endtimeOpt2: '0', stop: '0', restart: '0', action1: '0', action2: '0' }];

const Airdata = [
    { id: 1, updatetime: '2023/03/22 15:20:55', startoption: '1', starttimeOpt1: '10:00', starttimeOpt2: '0', endoption: '3', endtimeOpt1: '00:00', endtimeOpt2: '10', action1: '5', action2: '10' },
    { id: 2, updatetime: '2023/03/22 15:20:55', startoption: '2', starttimeOpt1: '00:00', starttimeOpt2: '5', endoption: '2', endtimeOpt1: '00:00', endtimeOpt2: '10', action1: '5', action2: '10' },
    { id: 3, updatetime: '2023/03/22 15:20:55', startoption: '3', starttimeOpt1: '00:00', starttimeOpt2: '5', endoption: '1', endtimeOpt1: '16:00', endtimeOpt2: '0', action1: '5', action2: '15' },
    { id: 4, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', endoption: '', endtimeOpt1: '00:00', endtimeOpt2: '0', action1: '0', action2: '0' },
    { id: 5, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', endoption: '', endtimeOpt1: '00:00', endtimeOpt2: '0', action1: '0', action2: '0' },
    { id: 6, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', endoption: '', endtimeOpt1: '00:00', endtimeOpt2: '0', action1: '0', action2: '0' }];

const PHdata = [
    { id: 1, updatetime: '2023/03/22 15:20:55', startoption: '1', starttimeOpt1: '10:00', starttimeOpt2: '0', endoption: '2', endtimeOpt1: '00:00', endtimeOpt2: '10', stop: '445.35', restart: '234.55', action1: '5', action2: '10' },
    { id: 2, updatetime: '2023/03/22 15:20:55', startoption: '2', starttimeOpt1: '00:00', starttimeOpt2: '10', endoption: '3', endtimeOpt1: '00:00', endtimeOpt2: '20', stop: '445.35', restart: '234.55', action1: '5', action2: '10' },
    { id: 3, updatetime: '2023/03/22 15:20:55', startoption: '3', starttimeOpt1: '00:00', starttimeOpt2: '15', endoption: '1', endtimeOpt1: '16:00', endtimeOpt2: '0', stop: '445.35', restart: '234.55', action1: '5', action2: '15' },
    { id: 4, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', endoption: '', endtimeOpt1: '00:00', endtimeOpt2: '0', stop: '0', restart: '0', action1: '0', action2: '0' },
    { id: 5, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', endoption: '', endtimeOpt1: '00:00', endtimeOpt2: '0', stop: '0', restart: '0', action1: '0', action2: '0' },
    { id: 6, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', endoption: '', endtimeOpt1: '00:00', endtimeOpt2: '0', stop: '0', restart: '0', action1: '0', action2: '0' }];

const ECdata = [
    { id: 1, updatetime: '2023/03/22 15:20:55', startoption: '1', starttimeOpt1: '10:00', starttimeOpt2: '0', endoption: '2', endtimeOpt1: '00:00', endtimeOpt2: '10', stop: '445.35', restart: '234.55', action1: '5', action2: '10' },
    { id: 2, updatetime: '2023/03/22 15:20:55', startoption: '2', starttimeOpt1: '00:00', starttimeOpt2: '10', endoption: '3', endtimeOpt1: '00:00', endtimeOpt2: '20', stop: '445.35', restart: '234.55', action1: '5', action2: '10' },
    { id: 3, updatetime: '2023/03/22 15:20:55', startoption: '3', starttimeOpt1: '00:00', starttimeOpt2: '15', endoption: '1', endtimeOpt1: '16:00', endtimeOpt2: '0', stop: '445.35', restart: '234.55', action1: '5', action2: '15' },
    { id: 4, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', endoption: '', endtimeOpt1: '00:00', endtimeOpt2: '0', stop: '0', restart: '0', action1: '0', action2: '0' },
    { id: 5, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', endoption: '', endtimeOpt1: '00:00', endtimeOpt2: '0', stop: '0', restart: '0', action1: '0', action2: '0' },
    { id: 6, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', endoption: '', endtimeOpt1: '00:00', endtimeOpt2: '0', stop: '0', restart: '0', action1: '0', action2: '0' }];

const LED1data = [
    { id: 1, updatetime: '2023/03/22 15:20:55', startoption: '1', starttimeOpt1: '10:00', starttimeOpt2: '0', endoption: '2', endtimeOpt1: '00:00', endtimeOpt2: '10', stop: '445.35', restart: '234.55' },
    { id: 2, updatetime: '2023/03/22 15:20:55', startoption: '2', starttimeOpt1: '00:00', starttimeOpt2: '10', endoption: '3', endtimeOpt1: '00:00', endtimeOpt2: '20', stop: '445.35', restart: '234.55' },
    { id: 3, updatetime: '2023/03/22 15:20:55', startoption: '3', starttimeOpt1: '00:00', starttimeOpt2: '15', endoption: '1', endtimeOpt1: '16:00', endtimeOpt2: '0', stop: '445.35', restart: '234.55' },
    { id: 4, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', endoption: '', endtimeOpt1: '00:00', endtimeOpt2: '0', stop: '0', restart: '0' },
    { id: 5, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', endoption: '', endtimeOpt1: '00:00', endtimeOpt2: '0', stop: '0', restart: '0' },
    { id: 6, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', endoption: '', endtimeOpt1: '00:00', endtimeOpt2: '0', stop: '0', restart: '0' }];
const LED2data = [
    { id: 1, updatetime: '2023/03/22 15:20:55', startoption: '1', starttimeOpt1: '10:00', starttimeOpt2: '0', endoption: '2', endtimeOpt1: '00:00', endtimeOpt2: '10', stop: '445.35', restart: '234.55' },
    { id: 2, updatetime: '2023/03/22 15:20:55', startoption: '2', starttimeOpt1: '00:00', starttimeOpt2: '10', endoption: '3', endtimeOpt1: '00:00', endtimeOpt2: '20', stop: '445.35', restart: '234.55' },
    { id: 3, updatetime: '2023/03/22 15:20:55', startoption: '3', starttimeOpt1: '00:00', starttimeOpt2: '15', endoption: '1', endtimeOpt1: '16:00', endtimeOpt2: '0', stop: '445.35', restart: '234.55' },
    { id: 4, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', endoption: '', endtimeOpt1: '00:00', endtimeOpt2: '0', stop: '0', restart: '0' },
    { id: 5, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', endoption: '', endtimeOpt1: '00:00', endtimeOpt2: '0', stop: '0', restart: '0' },
    { id: 6, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', endoption: '', endtimeOpt1: '00:00', endtimeOpt2: '0', stop: '0', restart: '0' }];
const LED3data = [
    { id: 1, updatetime: '2023/03/22 15:20:55', startoption: '1', starttimeOpt1: '10:00', starttimeOpt2: '0', endoption: '2', endtimeOpt1: '00:00', endtimeOpt2: '10', stop: '445.35', restart: '234.55' },
    { id: 2, updatetime: '2023/03/22 15:20:55', startoption: '2', starttimeOpt1: '00:00', starttimeOpt2: '10', endoption: '3', endtimeOpt1: '00:00', endtimeOpt2: '20', stop: '445.35', restart: '234.55' },
    { id: 3, updatetime: '2023/03/22 15:20:55', startoption: '3', starttimeOpt1: '00:00', starttimeOpt2: '15', endoption: '1', endtimeOpt1: '16:00', endtimeOpt2: '0', stop: '445.35', restart: '234.55' },
    { id: 4, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', endoption: '', endtimeOpt1: '00:00', endtimeOpt2: '0', stop: '0', restart: '0' },
    { id: 5, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', endoption: '', endtimeOpt1: '00:00', endtimeOpt2: '0', stop: '0', restart: '0' },
    { id: 6, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', endoption: '', endtimeOpt1: '00:00', endtimeOpt2: '0', stop: '0', restart: '0' }];
const LED4data = [
    { id: 1, updatetime: '2023/03/22 15:20:55', startoption: '1', starttimeOpt1: '10:00', starttimeOpt2: '0', endoption: '2', endtimeOpt1: '00:00', endtimeOpt2: '10', stop: '445.35', restart: '234.55' },
    { id: 2, updatetime: '2023/03/22 15:20:55', startoption: '2', starttimeOpt1: '00:00', starttimeOpt2: '10', endoption: '3', endtimeOpt1: '00:00', endtimeOpt2: '20', stop: '445.35', restart: '234.55' },
    { id: 3, updatetime: '2023/03/22 15:20:55', startoption: '3', starttimeOpt1: '00:00', starttimeOpt2: '15', endoption: '1', endtimeOpt1: '16:00', endtimeOpt2: '0', stop: '445.35', restart: '234.55' },
    { id: 4, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', endoption: '', endtimeOpt1: '00:00', endtimeOpt2: '0', stop: '0', restart: '0' },
    { id: 5, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', endoption: '', endtimeOpt1: '00:00', endtimeOpt2: '0', stop: '0', restart: '0' },
    { id: 6, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', endoption: '', endtimeOpt1: '00:00', endtimeOpt2: '0', stop: '0', restart: '0' }];

const Windowdata = [
    { id: 1, updatetime: '2023/03/22 15:20:55', startoption: '1', starttimeOpt1: '10:00', starttimeOpt2: '0', endoption: '2', endtimeOpt1: '00:00', endtimeOpt2: '10', tempstate: '1', openstattemp: '22', closestattemp: '21.5', humistate: '1', openstathumi: '10', closestathumi: '20', openstataction: '30', closestataction: '30', actiontime: '0', failureaction: '3' },
    { id: 2, updatetime: '2023/03/22 15:20:55', startoption: '2', starttimeOpt1: '00:00', starttimeOpt2: '10', endoption: '3', endtimeOpt1: '00:00', endtimeOpt2: '20', tempstate: '2', openstattemp: '23', closestattemp: '20', humistate: '1', openstathumi: '30', closestathumi: '10', openstataction: '20', closestataction: '10', actiontime: '5', failureaction: '2' },
    { id: 3, updatetime: '2023/03/22 15:20:55', startoption: '3', starttimeOpt1: '00:00', starttimeOpt2: '15', endoption: '1', endtimeOpt1: '16:00', endtimeOpt2: '0', tempstate: '1', openstattemp: '12', closestattemp: '9', humistate: '1', openstathumi: '20', closestathumi: '50', openstataction: '30', closestataction: '20', actiontime: '3', failureaction: '1' },
    { id: 4, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', endoption: '', endtimeOpt1: '00:00', endtimeOpt2: '0', tempstate: '', openstattemp: '0', closestattemp: '0', humistate: '', openstathumi: '0', closestathumi: '0', openstataction: '0', closestataction: '0', actiontime: '0', failureaction: '' },
    { id: 5, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', endoption: '', endtimeOpt1: '00:00', endtimeOpt2: '0', tempstate: '', openstattemp: '0', closestattemp: '0', humistate: '', openstathumi: '0', closestathumi: '0', openstataction: '0', closestataction: '0', actiontime: '0', failureaction: '' },
    { id: 6, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', endoption: '', endtimeOpt1: '00:00', endtimeOpt2: '0', tempstate: '', openstattemp: '0', closestattemp: '0', humistate: '', openstathumi: '0', closestathumi: '0', openstataction: '0', closestataction: '0', actiontime: '0', failureaction: '' }];

const Curtaindata = [
    { id: 1, updatetime: '2023/03/22 15:20:55', startoption: '1', starttimeOpt1: '10:00', starttimeOpt2: '0', endoption: '2', endtimeOpt1: '00:00', endtimeOpt2: '10', tempstate: '1', openstattemp: '22', closestattemp: '21.5', humistate: '1', openstathumi: '10', closestathumi: '20', LEDstate: '1', openstatLED: '0', closestatLED: '0', openstataction: '30', closestataction: '30', actiontime: '0', failureaction: '3' },
    { id: 2, updatetime: '2023/03/22 15:20:55', startoption: '2', starttimeOpt1: '00:00', starttimeOpt2: '10', endoption: '3', endtimeOpt1: '00:00', endtimeOpt2: '20', tempstate: '2', openstattemp: '23', closestattemp: '20', humistate: '1', openstathumi: '30', closestathumi: '10', LEDstate: '2', openstatLED: '10', closestatLED: '10', openstataction: '20', closestataction: '10', actiontime: '5', failureaction: '2' },
    { id: 3, updatetime: '2023/03/22 15:20:55', startoption: '3', starttimeOpt1: '00:00', starttimeOpt2: '15', endoption: '1', endtimeOpt1: '16:00', endtimeOpt2: '0', tempstate: '1', openstattemp: '12', closestattemp: '9', humistate: '1', openstathumi: '20', closestathumi: '50', LEDstate: '1', openstatLED: '0', closestatLED: '0', openstataction: '30', closestataction: '20', actiontime: '3', failureaction: '1' },
    { id: 4, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', endoption: '', endtimeOpt1: '00:00', endtimeOpt2: '0', tempstate: '', openstattemp: '0', closestattemp: '0', humistate: '', openstathumi: '0', closestathumi: '0', LEDstate: '', openstatLED: '0', closestatLED: '0', openstataction: '0', closestataction: '0', actiontime: '0', failureaction: '' },
    { id: 5, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', endoption: '', endtimeOpt1: '00:00', endtimeOpt2: '0', tempstate: '', openstattemp: '0', closestattemp: '0', humistate: '', openstathumi: '0', closestathumi: '0', LEDstate: '', openstatLED: '0', closestatLED: '0', openstataction: '0', closestataction: '0', actiontime: '0', failureaction: '' },
    { id: 6, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', endoption: '', endtimeOpt1: '00:00', endtimeOpt2: '0', tempstate: '', openstattemp: '0', closestattemp: '0', humistate: '', openstathumi: '0', closestathumi: '0', LEDstate: '', openstatLED: '0', closestatLED: '0', openstataction: '0', closestataction: '0', actiontime: '0', failureaction: '' }];

const CFANdata = [
    { id: 1, updatetime: '2023/03/22 15:20:55', startoption: '1', starttimeOpt1: '10:00', starttimeOpt2: '0', endoption: '2', endtimeOpt1: '00:00', endtimeOpt2: '10', startdrivetempstate: '35', enddrivetempstate: '15', startdrivehumistate: '0', enddrivehumistate: '15' },
    { id: 2, updatetime: '2023/03/22 15:20:55', startoption: '2', starttimeOpt1: '00:00', starttimeOpt2: '10', endoption: '3', endtimeOpt1: '00:00', endtimeOpt2: '20', startdrivetempstate: '10', enddrivetempstate: '0' , startdrivehumistate: '25', enddrivehumistate: '25'},
    { id: 3, updatetime: '2023/03/22 15:20:55', startoption: '3', starttimeOpt1: '00:00', starttimeOpt2: '15', endoption: '1', endtimeOpt1: '16:00', endtimeOpt2: '0', startdrivetempstate: '25', enddrivetempstate: '25' , startdrivehumistate: '35', enddrivehumistate: '0'},
    { id: 4, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', endoption: '', endtimeOpt1: '00:00', endtimeOpt2: '0', startdrivetempstate: '0', enddrivetempstate: '0' , startdrivehumistate: '0', enddrivehumistate: '0'},
    { id: 5, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', endoption: '', endtimeOpt1: '00:00', endtimeOpt2: '0', startdrivetempstate: '0', enddrivetempstate: '0' , startdrivehumistate: '0', enddrivehumistate: '0'},
    { id: 6, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', endoption: '', endtimeOpt1: '00:00', endtimeOpt2: '0', startdrivetempstate: '0', enddrivetempstate: '0' , startdrivehumistate: '0', enddrivehumistate: '0'}];

const PFANdata = [
    { id: 1, updatetime: '2023/03/22 15:20:55', startoption: '1', starttimeOpt1: '10:00', starttimeOpt2: '0', endoption: '2', endtimeOpt1: '00:00', endtimeOpt2: '10', startdrivetempstate: '35', enddrivetempstate: '15', startdrivehumistate: '0', enddrivehumistate: '15' },
    { id: 2, updatetime: '2023/03/22 15:20:55', startoption: '2', starttimeOpt1: '00:00', starttimeOpt2: '10', endoption: '3', endtimeOpt1: '00:00', endtimeOpt2: '20', startdrivetempstate: '10', enddrivetempstate: '0' , startdrivehumistate: '25', enddrivehumistate: '25'},
    { id: 3, updatetime: '2023/03/22 15:20:55', startoption: '3', starttimeOpt1: '00:00', starttimeOpt2: '15', endoption: '1', endtimeOpt1: '16:00', endtimeOpt2: '0', startdrivetempstate: '25', enddrivetempstate: '25' , startdrivehumistate: '35', enddrivehumistate: '0'},
    { id: 4, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', endoption: '', endtimeOpt1: '00:00', endtimeOpt2: '0', startdrivetempstate: '0', enddrivetempstate: '0' , startdrivehumistate: '0', enddrivehumistate: '0'},
    { id: 5, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', endoption: '', endtimeOpt1: '00:00', endtimeOpt2: '0', startdrivetempstate: '0', enddrivetempstate: '0' , startdrivehumistate: '0', enddrivehumistate: '0'},
    { id: 6, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', endoption: '', endtimeOpt1: '00:00', endtimeOpt2: '0', startdrivetempstate: '0', enddrivetempstate: '0' , startdrivehumistate: '0', enddrivehumistate: '0'}];
const Injectordata = [
    { id: 1, updatetime: '2023/03/22 15:20:55', startoption: '1', starttimeOpt1: '10:00', starttimeOpt2: '0', endoption: '2', endtimeOpt1: '00:00', endtimeOpt2: '10', startdrivetempstate: '35', enddrivetempstate: '15', startdrivehumistate: '0', enddrivehumistate: '15' },
    { id: 2, updatetime: '2023/03/22 15:20:55', startoption: '2', starttimeOpt1: '00:00', starttimeOpt2: '10', endoption: '3', endtimeOpt1: '00:00', endtimeOpt2: '20', startdrivetempstate: '10', enddrivetempstate: '0' , startdrivehumistate: '25', enddrivehumistate: '25'},
    { id: 3, updatetime: '2023/03/22 15:20:55', startoption: '3', starttimeOpt1: '00:00', starttimeOpt2: '15', endoption: '1', endtimeOpt1: '16:00', endtimeOpt2: '0', startdrivetempstate: '25', enddrivetempstate: '25' , startdrivehumistate: '35', enddrivehumistate: '0'},
    { id: 4, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', endoption: '', endtimeOpt1: '00:00', endtimeOpt2: '0', startdrivetempstate: '0', enddrivetempstate: '0' , startdrivehumistate: '0', enddrivehumistate: '0'},
    { id: 5, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', endoption: '', endtimeOpt1: '00:00', endtimeOpt2: '0', startdrivetempstate: '0', enddrivetempstate: '0' , startdrivehumistate: '0', enddrivehumistate: '0'},
    { id: 6, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', endoption: '', endtimeOpt1: '00:00', endtimeOpt2: '0', startdrivetempstate: '0', enddrivetempstate: '0' , startdrivehumistate: '0', enddrivehumistate: '0'}];

const Generaldata = [
    { id: 1, updatetime: '2023/03/22 15:20:55', startoption: '1', starttimeOpt1: '10:00', starttimeOpt2: '0', endoption: '2', endtimeOpt1: '00:00', endtimeOpt2: '10', startdrivetempstate: '35', enddrivetempstate: '15', startdrivehumistate: '0', enddrivehumistate: '15' },
    { id: 2, updatetime: '2023/03/22 15:20:55', startoption: '2', starttimeOpt1: '00:00', starttimeOpt2: '10', endoption: '3', endtimeOpt1: '00:00', endtimeOpt2: '20', startdrivetempstate: '10', enddrivetempstate: '0' , startdrivehumistate: '25', enddrivehumistate: '25'},
    { id: 3, updatetime: '2023/03/22 15:20:55', startoption: '3', starttimeOpt1: '00:00', starttimeOpt2: '15', endoption: '1', endtimeOpt1: '16:00', endtimeOpt2: '0', startdrivetempstate: '25', enddrivetempstate: '25' , startdrivehumistate: '35', enddrivehumistate: '0'},
    { id: 4, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', endoption: '', endtimeOpt1: '00:00', endtimeOpt2: '0', startdrivetempstate: '0', enddrivetempstate: '0' , startdrivehumistate: '0', enddrivehumistate: '0'},
    { id: 5, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', endoption: '', endtimeOpt1: '00:00', endtimeOpt2: '0', startdrivetempstate: '0', enddrivetempstate: '0' , startdrivehumistate: '0', enddrivehumistate: '0'},
    { id: 6, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', endoption: '', endtimeOpt1: '00:00', endtimeOpt2: '0', startdrivetempstate: '0', enddrivetempstate: '0' , startdrivehumistate: '0', enddrivehumistate: '0'}];

const Aircondata = [
    { id: 1, updatetime: '2023/03/22 15:20:55', startoption: '1', starttimeOpt1: '10:00', starttimeOpt2: '0', endoption: '2', endtimeOpt1: '00:00', endtimeOpt2: '10', coolerstartstate: '35', coolerendstate: '15', heaterstartstate: '0', heaterendstate: '15', dehumimode: '3', dehumistartstate: '15', dehumiendstate: '15', switchstartstate: '0', switchendstate: '15', failureaction: '3' },
    { id: 2, updatetime: '2023/03/22 15:20:55', startoption: '2', starttimeOpt1: '00:00', starttimeOpt2: '10', endoption: '3', endtimeOpt1: '00:00', endtimeOpt2: '20', coolerstartstate: '10', coolerendstate: '0' , heaterstartstate: '25', heaterendstate: '25', dehumimode: '5', dehumistartstate: '15', dehumiendstate: '15', switchstartstate: '0', switchendstate: '15', failureaction: '2'},
    { id: 3, updatetime: '2023/03/22 15:20:55', startoption: '3', starttimeOpt1: '00:00', starttimeOpt2: '15', endoption: '1', endtimeOpt1: '16:00', endtimeOpt2: '0', coolerstartstate: '25', coolerendstate: '25' , heaterstartstate: '35', heaterendstate: '0', dehumimode: '1', dehumistartstate: '15', dehumiendstate: '15', switchstartstate: '0', switchendstate: '15', failureaction: '1'},
    { id: 4, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', endoption: '', endtimeOpt1: '00:00', endtimeOpt2: '0', coolerstartstate: '0', coolerendstate: '0' , heaterstartstate: '0', heaterendstate: '0', dehumimode: '', dehumistartstate: '0', dehumiendstate: '0', switchstartstate: '0', switchendstate: '0', failureaction: '' },
    { id: 5, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', endoption: '', endtimeOpt1: '00:00', endtimeOpt2: '0', coolerstartstate: '0', coolerendstate: '0' , heaterstartstate: '0', heaterendstate: '0', dehumimode: '', dehumistartstate: '0', dehumiendstate: '0', switchstartstate: '0', switchendstate: '0', failureaction: '' },
    { id: 6, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', endoption: '', endtimeOpt1: '00:00', endtimeOpt2: '0', coolerstartstate: '0', coolerendstate: '0' , heaterstartstate: '0', heaterendstate: '0', dehumimode: '', dehumistartstate: '0', dehumiendstate: '0', switchstartstate: '0', switchendstate: '0', failureaction: '' }]; 
    
const AreaInfo =  [
    { area: '西大久保店', soilhumidity: '20', time: '5'}, 
    { area: 'エリア２', soilhumidity: '10', time: '5'},
    { area: 'エリア３', soilhumidity: '20', time: '35'},
    { area: 'エリア４', soilhumidity: '0', time: '30'},
    { area: 'エリア５', soilhumidity: '20', time: '5'},
    { area: 'エリア６', soilhumidity: '30', time: '15'},
    { area: 'エリア７', soilhumidity: '10', time: '25'},
    { area: 'エリア８', soilhumidity: '25', time: '5'},
    { area: 'エリア９', soilhumidity: '20', time: '15'},
    { area: 'エリア１０', soilhumidity: '0', time: '0'}];

const Irrigationdata = [
    { id: 1, updatetime: '2023/03/22 15:20:55', startoption: '1', starttimeOpt1: '10:00', starttimeOpt2: '', line: '1', area:AreaInfo },
    { id: 2, updatetime: '2023/03/22 15:20:55', startoption: '2', starttimeOpt1: '00:00', starttimeOpt2: '15', line: '2', area:AreaInfo },
    { id: 3, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', line: '', area:AreaInfo },
    { id: 4, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', line: '', area:AreaInfo },
    { id: 5, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', line: '', area:AreaInfo },
    { id: 6, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', line: '', area:AreaInfo },
    { id: 7, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', line: '', area:AreaInfo },
    { id: 8, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', line: '', area:AreaInfo },
    { id: 9, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', line: '', area:AreaInfo },
    { id: 10, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', line: '', area:AreaInfo },
    { id: 11, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', line: '', area:AreaInfo },
    { id: 12, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', line: '', area:AreaInfo },
    { id: 13, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', line: '', area:AreaInfo },
    { id: 14, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', line: '', area:AreaInfo },
    { id: 15, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', line: '', area:AreaInfo },
    { id: 16, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', line: '', area:AreaInfo },
    { id: 17, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', line: '', area:AreaInfo },
    { id: 18, updatetime: '', startoption: '', starttimeOpt1: '00:00', starttimeOpt2: '0', line: '', area:AreaInfo }];

export { CO2data, Airdata, PHdata, ECdata, LED1data, LED2data, LED3data, LED4data, Windowdata, Curtaindata, CFANdata, PFANdata, Injectordata, Generaldata, Aircondata, Irrigationdata, AreaInfo };
