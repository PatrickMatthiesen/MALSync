# bugs and notes for MalSync extension

## Background is trying to message popup by using tabid

When opening the popup, the popup makes a content request to the background script. 
But when the background script tries to respond to the popup,
it tries to communicate with the popup using a non-existent tab id.


src\api\request\requestUserscriptLegacy.ts

src\api\storage\webextension.ts
src\utils\syncHandler.ts



## failing page tests
```log
Lucifer Donghua
    https://luciferdonghua.in/anime/tales-of-demons-and-gods-season-6/
      Failed
        Title: expected 'Tales of Demons and Gods Season 7' to equal 'Tales of Demons and Gods Season 6'
          Recieved: Tales of Demons and Gods Season 7
          Expected: Tales of Demons and Gods Season 6
season 7 is the text on the page

kickassanime
    https://kickassanime.am/overlord-iii-5092/ep-10-9b9161
      Failed
        Overview Url: expected 'https://kaa.mx/overlord-iii-5092' to equal 'https://kickassanime.am/overlord-iii-…'
          Recieved: https://kaa.mx/overlord-iii-5092
          Expected: https://kickassanime.am/overlord-iii-5092
yes it redirects to the new domain

ImmortalUpdates
    https://immortalupdates.com/manga/the-emperor-is-afraid-that-the-princess-will-have-the-world/chapter-108/
      Failed
        Page Not Found
    https://immortalupdates.com/manga/the-emperor-is-afraid-that-the-princess-will-have-the-world/
      Failed
        Page Not Found
immortalupdates.com redirects -> https://www.cantinadelriomexri.com/

Hdrezka
    https://hdrezka.ag/animation/adventures/21251-net-igry-net-zhizni-2014.html#t:89-s:1-e:5
      Passed
    https://hdrezka.ag/animation/adventures/21251-net-igry-net-zhizni-2014.html
      Failed
        Next Episode: expected 'https://hdrezka.ag/animation/21251-ne…' to equal 'https://hdrezka.ag/animation/21251-ne…'
          Recieved: https://hdrezka.ag/animation/21251-net-igry-net-zhizni-2014.html#t:56-s:1-e:2
          Expected: https://hdrezka.ag/animation/21251-net-igry-net-zhizni-2014.html#t:89-s:1-e:2
should pass - ur has 56

Hikari
    https://watch.hikaritv.xyz/anime/57066/Dungeon_ni_Deai_wo_Motomeru_no_wa_Machigatteiru_Darou_ka_V_Houjou_no_Megami-hen
      Failed
        Page Not Found
    https://watch.hikaritv.xyz/watch?anime=Dungeon_ni_Deai_wo_Motomeru_no_wa_Machigatteiru_Darou_ka_V_Houjou_no_Megami-hen&uid=57066&eps=3
      Failed
        Page Not Found
https://watch.hikaritv.xyz -> https://hikari.gg/

Furyosociety
    https://furyosociety.com/read/crows/fr/26/94/
      Failed
        Title: expected '' to equal 'CROWS'
          Recieved:
          Expected: CROWS
    https://furyosociety.com/series/crows/
      Failed
        ProtocolError: Protocol error (Runtime.callFunctionOn): Promise was collected
page gives 404 on both links


```