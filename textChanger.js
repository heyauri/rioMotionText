/**
 * Created by Administrator on 2017/3/28.
 */

var chars = {
    A: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAoVJREFUeNrsnO2RgkAQRGXrEsAQMAQJgVwMwRgMwVg0BA1BQpAQOErrPsrjdgfKnR3gzW/h5NE99M7iZW3brihZORAAC1jAAhawgAUCYAELWMACFrBAACxgAQtYwAIWCIAFLGABa0DtdrtMXGVZJvyqWfJ9w81mU9e1/PP3+z3P8yUqq2maQaS6ul6vC7Xh+XweeshyYQ2VFcqKfshMGnz3gBtx1O12K4piWcoabahU4pokrBGdbrmwUvV4o7C2221VVdjwJ456YOWPsta2nE0PdrLqxGXNiR82YQVXf8uC5fdRMEYlgZUslK7X665teUYLz8+YGj+k6VldUPKQyr/KWjR1Bj343do96SFJNE2mLEnD8nculAWsgc8yISz9Z6KzJqvfjKylLWdNVvIGD6xX6/nFBayiV2X/ncqT1yYPq36Ufwltdt3jTMnK+CLRHKwX3wFrACxTK0TtqUNw7+vv9wkeorYzpqqsoAp6g1UQhJq4nCkP9pouCEtt/KAKK3hVvanKH7U0e7wtG/aKyFCPb7XqOSmOVKfTSeESnB1ZaWZd6zaM2obnBmsGytILpeNexZKXws6YkrIU7rzCM3E+sBSiKcqy17PKslTgFftaNGA1TeN/a+EZ0/f7vecMh8Mh+Icul0twbWQ9wXfxOvg1qqryn0RyLcfjcfIJXmLA4GhBIpnYTteAJWm9wHqnsiSz0Ng7Y9Fh+V/Fks9hhJ07qricBQ+uBDv1win7tGFJgrVkTbcIWBJlCS0WVF/sHB8dluRWC2FJxDXip7FWYAnvs3C0InRiPHFl/CNqc1MHYAGLAhawgAUsYAGLAhawgAUsYAGLAhawgAUsYAGLAtZb6lOAAQB0jf7CahauSAAAAABJRU5ErkJggg==",
    B: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAoJJREFUeNrs3O1xolAUxvFNhgZswRa0BCmBFrAEKAFK0BKkBC0BS9AStAT2ybLjMPvFo0tOuJf/+ZAxMzAJv7n38tyX5KPrul+UrT4hAAsssMACCywIwAILLLDAAgsCsMACCyywwIIALLDACqgSnx+TpunpdHrjxsVisVqt+q/L5XKz2ejzj2l1LqWHHOsXzrJst9t1P1HhYfWlVnY8Hp2xQh2zrterunZZlgzw1qrrervdgmWt/Z8Cy1rqjPf7HSxTScqncUUSSn2wkuk8cJ88+8/n8/mlnqWXo2553B4/lh5V0WnYuZqmUZORguV2B6zpdkM1tDzP27Y1EjiM8QGMWUVRsOrwQve0XPbeRD02LE0DaVkj1+hz9SCxfNJ5JFjG6PDduQGsuLDUB+u6fnpZlmUOy83JZI3UoJQGlOAtY5bi67zmhtJJ07RnevU96PAq/KpA1+CHs6Lb7cYavElKc2+3zbGAsdRaL5eLw0sweCwZHQ4H5w3XULH0Eliv1w6T50i6Yb91aElhYP2tsizdtg5jWHVQcPVpX5Es0ah9qVfOCEtR4BH/lAkUoIqisK/8eTSu6ST4IdajlM6N8z7FiLkneBFUVWVpX29MKiMcs+SVZZlxrYIB3rq+TsuaUIEFFlhgWdcYwBoZ67s3+sPYN2yaBqznIXO/36dparx+Rif/+q2w4bcvJXJjyo8ESzT/s0zMKZrx549gfR2ldNjpiQFL47rPudPPCKSGB8LBeiLF9v3zEb2qqrZtPTelk+CYFNPzPNe7z/8UcxJEI3r8TbnClOdJkH/qg39EPbucBRZYYIFFgQUWWGCBBRYFFlhggQUWWBRYYIEFFlgzqd8CDAAuDkL9BnlXDAAAAABJRU5ErkJggg==",
    C: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAn9JREFUeNrsnO2RgkAMhs8bG6AFLEFLoAVaoAVb0BKwBCgBSvBK8ErQErgczDg3fjA5YcOyPu/PG5fbPCZLCImLpmk+kE6fIAAWsIAFLGABCwTAAhawgAUsYIEAWMACFrCABSwQAMuJll7t5rvVzR/X63UURcD6VVmWdV1/ter5WJIkQi1pNdlem4l0Pp93u90LLhPHsSyU5fZ7ngZWnucDI0uWF0URPqwsy8YKC7lUyLBGJGXPyxSWBI6LY1eOsNBgyZHsLgM4nU4GJtglpYfD4XK5OLr4fr83MGFh1kWzWq3uE84R5dRzTZNSSTiVpMTgNE0lmeoSevFHfXI7+t1jGliSo2s+Jjl6VVV/HUTs32w2ykelQDJ45TPKw3NabnaatfIvArkbdmH1mrVC0JMv3uhuqImRZ94noCU836WeNTxj8KREYwGrv/aiPPiplOJZ1OCRdzX4njCcspo8L1hZK8KQMwtYCFjAAhawgAUsBCxgAQtYwBpbdV0vFFK+ncSz8CxgAcut3PUqBQjLoumDMJwfLE/eJ88D1vD3ycMbAOYUhhpePae4vhcuBFgaM8qyfMhL2bkbtXJrhk0zm7J7734C4Hg8KhGkaeraiqU/ntU5kUScmN0B+lcDrsX7fbOhAU2n5JAz0WBOzC7PctqssN1uLXq4AhhHsXErU88Sk+T7d3HloiiMWgONR+jk8B53/3meBztvKPEyYupoSWqysd/h8SjEJQV7ixlpUVVVr2VGssrYoa6yG6F7Vqi6/lRBzzNNN2Qhug6MTaKJYd08SN9XF+JWnuzQI1jUs4AFLAQsYAELWMACFgIWsIAFLGABCwELWMACFrDeVT8CDACBApVLFWwP8gAAAABJRU5ErkJggg==",
    D: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAdVJREFUeNrs3GGNg0AQhuG2qQEsnIWzABKwABKwABJAAkgAC1g4CSCBm0COH702Gch1bmHf70dDmpLSJ7PLkOz2Ok3ThehygwAssMACCyywIAALLLDAAgssCMACCyywwAILArDAAutAudt8TRRFXddtPetjznrwOScIgpNj7cvXnIc34zgOwzBJkn+4oMkk8vP+9rKl0MqynGxzVKy1yoZhMMM69gTfNI3MhuM4cjdUpe/7NE3B2lBfO261/vZZVVWBtaG4DGYut7DCn+w412AkutWUtm27HkulSL3I+JIpXNnB+tWU/j5R2ih5xFFWpe99ljwJ5nmu+aR3c9arktE8PCtH6/nvhsqRCJZDAQsssMACCywCFlhggQUWWAQssMACCyywCFhg+Yz1prVwVJb3WDbLr6gsKgusV2mahsrSpigKzccM1kPcHB99URQpl8csG1feGrdW/gnNeixGm5ZcGVTW3bVScrlxPUnrsGwYA0uVLMu4G2oHYBzHYKkGYF3X9FkqqbZtzfa2HhhL5ilLqYvj236fRnRkhhIpgy70eFiis+wjl1cBspnLn+bKH1F712eBBRZYYBGwwAILLLDAImCBBRZYYIFFwAILLLDA8iTfAgwAhov2vlCJPZsAAAAASUVORK5CYII=",
    E: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQBJREFUeNrs3MENwiAUgGExLsAsrNA3U1foTrBTR6gmJp56kINVy/efPTRf+ghI0rRt20XvdUUACxYsWLBgIYAFCxYsWLAQwIIFCxYsWAhgwYIFa7+ISB+otebNMoawYAkWLFiwYA3S7QefaZqmrt/nnMfFqrUaQ2sWLMGCBQsWLDv479b1n/pj+15KGRcrIrrORoft+I0hLFiwYMESLFiwHHd2Wpal67gzNNY8z8bQmgVLsGDBggULlmCd8bjTdbvzOk4ecCH29/eGz9Z1NYbWLFiwBAsWLFiwRij5ELU3CxYsWLBgIYAFCxYsWLAQwIIFCxYsWAhgwYIF65zdBRgAB2kfVa0J2mAAAAAASUVORK5CYII=",
    F: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAPJJREFUeNrs3MENgyAAQNHSuICzsAI7sQLM4gquwEyUATjooba1758xwRchGBND7/2hYz0RwIIFCxYsWAhgwYIFCxYsBLBgwYIFCxYCWLBgwZpXaw3vad93T5ZlCAuWYMGCBQvWP7R84ZxijOu6nrrk7Pj7YJVSUkqWoT0LlmDBggULlhP8B9u2rbV2fHzO+aKZ9QsbR/OfvgXL0J4FCxYsWIIFC5bXnUnjoB9jhHWoIeWDhT0LlmDBggULFizBggULFixYggULFixYsDQt+BG1JwsWLFiwYCGABQsWLFiwEMCCBQsWLFgIYMGCBeuevQQYAD9w7XiTuE79AAAAAElFTkSuQmCC",
    G: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAm9JREFUeNrs3NGRgjAQgGG9uQZsgRawBCzBFmjBFmxBWrAEKEFK0BK0BG5PZhxGJ7qibEL498nzToZ8kmQJm5s3TTMjdPEDAVhggQUWWGBBABZYYIEFFlgQgAUWWGCBBRYEYA0Sv0GdTVVVd+8sFos0TcH6j9PptN/v67oWpsvl4vqzJEnSa6zXa3nt7XQbT1GWZZZlPU5YPiWf9XLOHrDO57NcIB9+x0Imx4kc63A4fKsfyXAmR4sW63g8Sgu/OIYYe5li9RukXnqZ9Uc7rN1uN9Acled5bFiDTvnSwQ2aYJTBSzIlKdVwxy+KIp6k9DE1d0WbebavJVkVZeWXsd1uI0lKlZOgjGu9RzqDnmiBJbP7J+O0MoM1SOstxqwnN313SbmrY2o+Ln02hiUaZTNcKOGsOgS0nuVzOSGaxT+urPduaMBiDZ41eO8hOVQI88M4sIZY26EbggUWWMyGPkLuvd+9MTZ4dh0olkitVqt3Z0xNhkE3ZMwCCyywCLDAAosMXhlJknSfMBdFMejT/9FjbTab249VVYWARTcECyywwALLY+hr4UaPpXyi5xIJIWmww1IWK7gqIpWVkhZhVBSti8cyybIsldZZlg3dirnN//xbLpf6krYeBbgzkzV4o9sdab8Sq77GpGfDz7eBTQhLJsQ8z8HSRncVYaRXqB3W3RJVj5Ah3PPlabw5s3dr261yEh5TBw/bfnv0x+4mzGlhtammvqpRFLr7clzVH9Fi3cikV7rU5GqS3/raaO8zg38ejwVGcvmEU/5+iyCwyLPAAosACyywwAILLAIssMACCyywCLDAAgsssKYdfwIMALX7wq9Z+viIAAAAAElFTkSuQmCC",
    H: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAOZJREFUeNrs3MEJwyAYgNEYOlp3cgZ3chZXMeKltFTwUiPlfdefhOShhxCSUGs9NNeJABYsWLBgwUIACxYsWLBgIYAFCxYsWLAQwIIFC9ZnYaKU0ujwNpo5g5VlG8KCJViwYMGCBUuwYMGCBQuWYMGCtVGPfS6llJJzHo12uMKw5tudBW8TWr++F9sQFixYsGAJFixYHndePXtfR7kH6w0rxjia7oBlG8KCBQsWLMGCBQsWLFiCBQsWLFiwBAsWrNsLfkRtZcGCBQsWLASwYMGCBQsWAliwYMGCBQsBLFiwYP1nlwADAIgVIg41FpPaAAAAAElFTkSuQmCC",
    I: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAKtJREFUeNrs3LERACAIBEGx/5LoDS0BAhNnLyba+ZioqqVeGwEsWLBgwYKFABYsWLBgwUIACxYsWLBgIYAFCxasWZkZje4ZLMuCBUuwYMGCBQuWYMGCBQsWLMGCBQsWLFiCBQsWLFiwBAsWLFiwYAkWLFiwYMESLFiwYMGCJViwYMGCBUuwHhQeUVsWLFiwYMFCAAsWLFiwYCGABQsWLFiwEMCCBQvWnx0BBgCIewtNidNjyQAAAABJRU5ErkJggg==",
    J: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAXdJREFUeNrs3NFtglAUgGHpBq6gI7gCjuAKzgIrOAsj4Ag6go5we6JpY5pqtJh7xX7/kz6I+nm4QGKoUkoT3dcHAliwYMGCBQsBLFiwYMGChQAWLFiwYMFCAAsWLFhD67quuqO2bWGZLFiwBAsWLFiwYAkWLFiwYMESLFiwYMGCJViwYMGCBUuwYMGCBQuWYI0Iq23bG/8OXS6XsEwWLMGC9dV0OoV1b7PZ7D2xMk/BuLFuT8F2uz0ej5dPX/AHqLLd82+/38/n89ua6/U6HoTaZrO5tLtW7hsWpow9d4lZLBYpb1kX+LquX3ZrLzdZfd8/8ZPvdrvMkzXJ/H6r1eopUrG6pezlxopxGH4Ii7XvcDi8P9Z5ZxziFa+NLaQSTYq8a3zbvx0ZC0oVw4piP2qa5qERi3WqyN73Xb6T0l87n392p66NUn0qjgzFL5gKY/04xY8Kn0mNBcuFNCxYggULFixYsAQLFixYsGAJFixYsGD91z4FGAAFxpwXRUjPAQAAAABJRU5ErkJggg==",
    K: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAkVJREFUeNrs3NFtwkAQhGEcpQG3ACW4hVACLdCCa6AFWqAFWnAJUAKU4GzgBREJDw+s5+x/n08o+jS37J1Nqr7vF5RWXxCABRZYYIEFFgRggQUWWGCBBQFYYIEFFlhgQQAWWGCB9Vzr9boaqljz4hNWq1Ul1PV6nXuyDofD+XweXLbdbuu6njvWfr9XlrVtO/eeFZk6Ho9KrJbL5dyxdrudQ6wKwIqGrezBhFgVgGXSraaDlRMrd6yQUiaGzWbDBP83Xg2u+bnV3LG6rlMmhpxu5Y6ldKvMWPliRatSsDJj5Yvl1q2ssZSpPTlWplixAQdvWpqmSY6VL5YyiOb/YXZYMS7E0PB6TczrYKmtPb9bOWIpE8NYsbLDMpytHuvbKla23coRyzlWi7KeG9Z1nXYbUzzWR58JTg1rId8ygwXW+18Cyo0gWOOHqzws8b0HsN44P4I18k4sEiu24SjhKvXNP7Dc27wjlngAHCFcfUrpDxfitHy5XJQXPWJNn1t2yWrbNryUSyvxQexkk3WPVaw/nU7K+vjY+SbrHqv7FlN845yY2eaNsALo8SJUbPOZO9EL6+k7UXmpfaZY//uXEi7xDd3pD6Xi10LawGWNFclSBq60Nu9+3BHbvPjDgoljiY9UYycmPPtxx4pt2DSN0uYTOlcBtw5iuBK+EwvAEttWd6u5Y4nn6oRwlXH5pw9c/OxXPfp8us0Xc63ssBMr/hH1BJMFFlhgUWCBBRZYYIFFgQUWWGCBBRYFFlhggQUWWFTUrwADAHFImBJfDWY7AAAAAElFTkSuQmCC",
    L: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAMdJREFUeNrs3LENgCAQQFExLsAsLMcINxQrMBPaGxNKgu/XV5CXg5I0xjg014kAFixYsGDBQgALFixYsGAhgAULFixYsBDAggUL1mettTTRMwbLZsESLFiwYMGCJViwYMGCBUuwYMGCBQuWYMGCBQsWLMGCBQsWLFiCBQsWLFiwBAsWrAW71jxWrTXnPDlcSomI/2L13l1DbxYswYIFCxYsWHqXfERts2DBggULFgJYsGDBggULASxYsGDBgoUAFixYsPbsFmAAfSARhDW4TnEAAAAASUVORK5CYII=",
    M: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAj9JREFUeNrs3P+NgkAQhmEx14At2IIt0Jw90QItXAuW4G3OxBDgPmc53Rl23/0bSXgy8+3wI3b3+/3Asq0jBGCBBRZYYIEFAVhggQUWWGBBABZYYIEFFlgQgAUWWO1iXa/XLn+lX1lOPgzD506+m8oax/GNh1XehmBlrO/fBdbbissI2gTWSwj3sgqElXa6f2rShhmaDWHdbjddO2BZiytCYMXCEpUFVkajCcfT6VQtVt/3G8pHOIoT7h7rcrmIjP/LSziKE+4eK3XN+XzOKi69D9aMpS9vNZuClFU4rFUXgZUCq+RGGQtrteMEh+jo+rGWNHqyr78NU8bbO1F3WeVYj0azZ7wOrCYmeJE1s9gKMo56Yr2lDQunuxuWLopnNaWWTAEfJLA8b6QtxSV68HknUPmcZZ/jxdDwrE1RevVgWe4Q49zoOGNZntWINnTB+grYhg8m/VSvicqadpYuLlFWqYVLPiB1w5rmsd4QLeneShu+zHhRO+XHUX+s3KeAqz8s+ab6GBPLvpO2grUtfVz2wRBYG67cK913ieWV7rvEaqsNp3PphvGyLazZc4Ksi3cMrEOED0Oyrn92cOHPAf2xsgJ7dnBzWFlt6BhYUSrLmPH6o5ImsOyx5ZvuUbCMzeXbg2CFx1puYWBZh1Jjciep5T5Q8j3YIc7Xyi+rZvWA5uYsI5bv0FBDZYEVdMgKhKU/B4wglVbHH1Hvr7LAAgssFlhggQUWWGCxwAILLLDAAosFFlhggQUWWCzL+hFgAK1CEDiUER9hAAAAAElFTkSuQmCC",
    N: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcpJREFUeNrs3OFxgjAYxvHSDVghjAAjsAIrsBwrZAVWYIRkBBqt57UejVFP+7z4f7+2x+nP5wnQYKt1XT+YsvmEACywwAILLLAgAAsssMACCywIwAILLLDAAgsCsMACC6zLqcpmmqZHjvBeyfLeKyeres0ma+HHXtd1COHuIzz7vWglK8aYaSILvKUmmsFq2xasy1mWZZ7nzeUMrI2RXbbAMo71VxPBshQuM1jOObBKmwiWsSaCtQus5ThgWQ2XGSxud65MOiGem8jZ0FgTwdoR1s8mgmUpXCpYmZPdN5bC2fCwI/KCufoyxnHM/DSEUHKQZ78LlWT1fW+giSLJSr+TKdowDArJEsJKIvkmUsPTeO/1myh06ZBPlsLmqxBWWrMyXilZ/371oHVRmm9ijBGs0iZSwxuaCNZpznfL+SaC9Ws9Ilk7aaLin2hkm6iIRbJua6LCc342sGTDJXQjDdad45wTbKLuhoVguMDaBZZgE6X3DdXCJXcjrYwl9K2wzVfSdV35Y97v9a0w8XCpJyvVs2kaklV6TlR4jM0GllQTwdJbs/Yx/F8HsMACCyywGLDAAgsssMBiwAILLLDAAosBCyywwLI0XwIMAAfXAsIjiXmrAAAAAElFTkSuQmCC",
    O: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAltJREFUeNrs3NFxgkAQgGHMpAEt4SxBS7AFW6AFW7AFLQFL0BK0BCwBSiCbMJNxCJ4b5fbI5d+HPDg4A5+3y4a5ZdI0TUbo4g0CsMACCyywwIIALLDAAgsssCAACyywwAILLAjAChLvYzuh0+nU+WSxWEynU7A+43q9Hg6Hy+UiTHVd3ztstVqJ2nq9lr/RzrWJF8fjUQh+e8LOud1uF+WE42CVZfkEU4dMrNPHOp/PQ9Ug4yWW2afesGXE0iv7o2vqNszy0RTrxTrlqV9VVSWFJfkS7p6+3W6TwgraH0l2G1zCxGbLkfScy+VSefB359n2q55O9TaKopAvptCUSpooF0inWuvvCXmeJ5KGytLeW3qU3YYsxkTScDababJJbmq962g+n0tKarIkhUc0GinP0wXlzUFZ3VJ4nuWpTUosuY38F6xALStPSsECCyywCLDAAgsssMAiwAILLLDAAosACyywwAILLAKsNLE0uxn8EXq2ICms0PMERliay/DsVPg5o5JyGjrnHh5T1/U9L82OD4OtEiNaWRL7/b73Q81eIs3v8WqMbVagMwSg3yZpMD1gtPMvU2/+axOqzSkp+b1rrTfKsgy+uMy2dud5HjTNDS7BrnUIuu866C8RYWUFHUdJcHZHykqIJrsoijRH6Aaf4NlsNikPZw7oZTBVEX/sVxLn9Xy0mQSLjyVRVZVc7XNksqCk/Nmfs11Tei/a9xS0ryrwd1JtSAsS6zUP8bEe/i/tvmIMpzcuLJ6UggUWARZYYIEFFlgEWGCBBRZYYBFggQUWWGD9y/gQYABO+P229yPVkwAAAABJRU5ErkJggg==",
    P: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAdpJREFUeNrs3OGtgjAUhmEkLsAKrCAjlBFgBBzBFXAEWIERYARYgRFgBO4JJl5yfx3NtZbyfj8MJlbkEdrTYjwtyxIQXUIIwAILLLDAAgsCsMACCyywwIIALLDAAgsssCAACyywdpSznd10XZem6RsNoyi6XC6yIY+ybYx5PP1OFitp2/a/PrCQFUUhb7hYz/6wnpGzrO97m1g77rPk0k6SpK5rOnhtrterNS8fRkPxGoYBLG3yPAdLm3EcLVyM/hSlFrDOTh1wvGZ7vkiUbaXbkhdvm3telJZl+afhNE1SgiqPpaqqQ9dZUq8LQZZlmhfP80yfFSixpEwFS4vFaPh7PYKlzTdXZvyrs8AC6618eqTzB0tfx4MVNE3jwiAQ7uK0ut/vLpQXTmPJ9KWu6yRJlPMYY8yBVh2E5tmRD8Pw0lzvedPsKFgvrcnYnxL5U2eBpY1ZA5YqZVlSZ6lSVZWdaXbogZR+3fm4WHEct21rTcq50kEZueiKNZb36zrWdoyT7cdPtD57v2svWDKo3W43Z785Fv/AAgsssMAiYIEFFlhggUXAAgsssMACi4AF1mdy4o+oObPAAgsssMCCACywwAILLLAgAAsssMACCywIwAILLLD8zI8AAwDN//7sunXNSAAAAABJRU5ErkJggg==",
    Q: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAApFJREFUeNrs29FtwkAMgGGougCMEEaAEVghK4QRWCErwAjJCDBCGCGMQEZIjZAQghCZ9s6XXH8/VBVqpeTr+c5J7WnbthNCF18QgAUWWGCBBRYEYIEFFlhggQUBWGCBBRZYYEEAlpf4HtoFHY/Hp0+Wy+VsNgPrGufzuSzL0+kkTE3TvPux9Xotammaytdg19qGi8PhIASfXnCSJLvdLsgFh8Gq6/oXTE9kYh0/VlVVrvYg4yU2sU89t9uIpddkpGvqMczy0RTrj/tUz/51uVyiwpJ88Xem53keFZbX+kiy2+AWpjYtR1JzrlYr5Q/fK89bvdpTqT5GURTyizEUpZImygXytFvrz4QsyyJJQ+XW3rn1KKsNWYyRpOF8PtdkkxxqnetosVhISmqyJIZXNBqpnrcLysNBubvF8D6rZ29SYskx8l+wPJWsvCkFCyywwCLAAgsssMACiwALLLDAAgssAiywwAILLLAIsOLE0nQz9EeSJGD9MyxNs0JPp8LrjErMaaj5mzdN885L0/Fh0CoxoJUlsd/vOz/U9BL5zsFrDG1W4GkIQN8maTA9YNT5N1E3/90S6pZTsuV3rrXOqOva++Iya+3OsszfXQiuwS3YlQ5e+669N3Ubryx/4ygGfcoBZndkW2HQKeQEj9mUU5jhTOdekoaxTYU9RlEUbvPRxivYQLncW57nDskMvEJO399X2Xa7dXJQ+p51sqvgNdH5LH1zlFJ+s9lovDxOgbbjCeUcnr+HxDFhaZ6ZvM7/jgyrx0vOCt8vHsaHJUfe69sxkaqqKtrSwaGXfC8PUtEWpQ4fM9M0NXvcGVbp8FFIkVGWpfKIdBIjxuI/0mCBBRYBFlhggQUWWARYYIE16PgRYAAFWSm6+dJU5QAAAABJRU5ErkJggg==",
    R: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAiVJREFUeNrsm9FtwkAQRHGUBmghLdACLeASqIESoARTgl0ClGBKMCXgEpxJLEGElGQduI3v/ObDXz6Ze7rdm90VWdd1M2TTCwiABSxgAQtYwAIBsIAFLGABC1ggABawgAUsYAELBMACFrAi0qvPZ7Ise2T526cWi4Wey+VSz/+h1bnoub9ZvIqi6NwVJaxeOmh1XQPLqvl87nnEMp/x/YM562fpfOmUcRualOd527bAMul8Pu/3e4/4SCAMe2/RNA0ny3q4jsdjIqbUeLVd8/Qfdn46neS/pmJKtdWvSy6Xi2yBff93yxP3Wd/tdr1eG9NW6F1EkLO2260xbZHgP3JZ8GSU0m0ILJp/wEIxwbLcdA6NhzhgyZ0Dy3qsgGXVZrOxvLZarSYNS+V0nudVVf36pkoiedfgjaYE+lnCVNe1w3wsBetQFIXTJDH26U5ZlozCZpY81TSN59ww1jBUad1P812/GnUYChZhODgegTXsQmR8P+BaVLIP7UtHOgq7Onjj2rZtZfSNo40UYInU4XC4K6FV7liq6J7XpB28LjvhM/oDh4n02H2WYjN0cCVVGzr0XtKBpTB0aL+k03WwdEGZSA8QsMaldMIQWDcDAawnK7SJTwqWsTACFmEILHLWJHwpYchtCCxgPbPcUc7a7XYBf8f4/2HRy1jx6LXoR2EkeGAhYAELWMACFrAQsIAFLGABC1gIWMACFrCABSwELGB5612AAQCjKaY5iMyusQAAAABJRU5ErkJggg==",
    S: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVJREFUeNrsnOFtwkAMhUnVBViBFWAEGAFGYAVWgBFgBBiBjAAjwAgwAn1KKoQCSXw5Yl8uzz+qClVV7qvte+d3TfJ4PAYMWfwQAWERFmERFmERFhEQFmERFmERFmERAWERFmERFmERFhEQVivxG9TT3O/38/n8+slwOByPx4T1H9fr9XA4gFGapoD18WfAazqdzudzY3APu7hcLsvl0ulpR6PRdru1emAzWOv1uvEfGFl2u916AQvrxGo9CwK97HQ6xQ/Ln5QVL21Yq9Xqiw0X/V6zHlVhIRG+vkGBfpywsPe3saFjV40NFpbUkvqB/tBZgp4ohfIUtm0sHl/xfZqF5DdDfEUlSiU1+N6whRSOx2NUZQjxXbvmj1ubRGpA4iosQW/qgDNgrS7Pq68QkpQsHL/jH9GUZZAEVtkJvHfzrI/p5pq2XYIlKZOKja+23+nA0mvwkocpO+vV9nj8gMISErWr3UmSSKQDRMB73SExq7uS0kA1KOmQ81I7voQrHYSTGSTRZDIRyv1o3R15maDiFlkote0AyxDqXCICCp1IR5qHOKJxtSeeumG/3/cOFjq3a3K9tjzzxq89VvYxdcyrsnuGBTYKfV/H0grzFJBIMROr1cZk9eeF0Odlad832xwNeVnCQkATNN4fq8/eEcLK9YSPRYZy7hGsZ4oJT9qGxRgKrLzrN1NhaskVECyfqtQR98HBatb4dSoxUMMCyYVkcZrq9Nrdya9fCbWYxOXvDKzZbJbURVl9hXNbuQO+oeT+W1S+oWf/IqxW5veEVe/gN1b/EcKq3ex6B6vMK9S5TtQxWLvdzunzBg5uN2BJOjRqbbPZvJOSwNIpQ6WLISixxWIhdAmhFZwu4A6y+5WeQ0RRBGtHOwmxqC6GgFRL/zEwyO7BK7XVTtjR1a09zrGyjx1dlrCanr728O+7JRO/FfYtXn0xWT3tQsgLk+sOZjP43MtxRQZMhhdp9G4rV+jV/D0FFWfAcRb52woMH9UeVmGGVxjjBfUSjLBgBR58Fw1hERZhERZhMQiLsAiLsAiLsBiERViERViERVgMwiKsduJPgAEA+XyVu8uZ3pEAAAAASUVORK5CYII=",
    T: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAANxJREFUeNrs3M0NgyAYgOHSuACzsALDwUzs0lWo6dHEnwvakOe9mvDhE/Bo6L2/dK03AliwYMGCBQsBLFiwYMGChQAWLFiwYMFCAAsWLFjbaq1hcOsIJ8s1hAVLsGDBggVr+pZ7xsQYc857Tz+/ThdJKa3rHIwY/hr9DyqlXNlqa+3ZfbqGvlmwYMGCJViwYMGCBUuwYMGCBQuWYMGCBQsWLMGCBQsWLFiCBQsWLFiwBAsWLFiwYCn4EbWTBQsWLFiwEMCCBQsWLFgIYMGCBQsWLASwYMGCNWdfAQYAm9kWXxDs58sAAAAASUVORK5CYII=",
    U: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAZFJREFUeNrs3FFxwkAQBuDSqQEsBAmxABKwgAWQQCSABLAQCWABCSAhvYGh09LSuSnNBobvfwQus/dlL7PwQK9pmhfJyysCWLBgwYIFCwEsWLBgwYKFABYsWLBgwUIACxYsWJfpZWQ0Gl1bXlVVzhV0lmMIC5bAggULFixYAgsWLFiwYAksWLBgwYIlsGDBggULlsCCBQsWLFgCCxYsWLBgSThWURS3LK/rGtaX7Ha7a29tt9u278fjYf3YQcvl8nA4PBFWWZY5H5vNZhcuqafSizlrh8Nh27t4i8HK3EmiGQwG4/H41Cap19brdU5b5d+Pm9JEpdXNJNyALcSNDpPJ5EEv3kFntddc/X5/v98H1B+Ktdls2sBarVYx9YdipSwWi/+Vmk6nYcVHY5280sF5OKlusE7n8cbnV+IOO30dY3202B/G7rRkPp/HPNEv0uv8j6jTIFqf8/tYWx6TRtauSu0e63PSsP79O3NxzD2Ud19Yfs+CBUtgwYIFCxYsgQULFixYsAQWLFiwYD1l3gUYAIbGVuEGoBIxAAAAAElFTkSuQmCC",
    V: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAqxJREFUeNrsnNFxgzAQRK1MGsAlxCW4BTfnnlyCXQIuAUogipPxZDIZ3SLQnmT2PjNYSI/du0MQwjRNOwUWb0IgWIIlWIIlWIIlBIIlWIIlWIIlWEIgWIIlWIIlWIIlBIIlWIIlWD9xv98DEOfzGRktHoaMFk/aJKyPR5iHXS4XZDTksK7rkDNWasPj8YgIENSpeczpdGo4Z4GwxnFcBRZyurZhxbjdbqtYtW1YoC9MWKBV27YheLVNGyI+LSorEizkaq9iw1eAhdTyVWxYGtZuKh993yMzGYYhMQgywvV6LboQkrJir7hEXGA7+go2BA2SgGWalOFBGiwkxyeyElIKizYN1SkrAasSZQXOC7hRGvv9Hqk2//49/tYUV6wPSGZsQFlg9v1XXOMjVqkhbcBa4kTEg4SERYWV3ZoisMrtYfnAyi6IlZTC17EhoRSSbneegVz/jBudOCxn/tSnOxlOdN9K9rFhXo5HYHGyOxtWRtqqKGHxlWWqYK6ywKdt7cFCVDA3Z9FkVSOsP8oyd7I2Des3ryq2kh1hzeoequobdi5v0eBpyyyFTFI+sMwVPhmZsJge9IGFdw9I38CceeB/qiAiOBwO5h3i1+RCSB/W9z2T17uLsrquS2+8xI7B3Pks+ipWLTYEc7zpQXJ2d4NlrjPqrqre3c2GyDoRG/JhBZdv0ZhPxr7zWrp1cJj55BQLdRF/zp+z23vwy2Hx5+wGa2HV3xashYXfBVZw/NiY2aAn2tFhGDakrCXicpFVq7D4vbs/rOwcv0VlZa95i7DynmJxXsWqDlaeRrwSVpOwyHtYUlaDTWlea+o4Yf9/KJ8lLkdZVQFr1vp9YQV9iLolZQmWYAmWEAiWYAmWYAmWYAmBYAmWYAmWYAmWEAiWYAmWYAmWYAkBHp8CDABKCtGI2oWS6AAAAABJRU5ErkJggg==",
    W: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAv9JREFUeNrsnNtxAjEMRUMmDdACLdACVEsLtEAL2wIlEE8ysx/GenklP5brT7A90pl7JXs34fB6vb4wdOMbCAALsAALsAALsIAAsAALsAALsAALCAALsAALsAALsIAAsAALsD4O1v1+PygGs4Nm+e12o5Zfr1dxeQpyCFiXy0Uz7fl8Fj9/PB6a5cuyVHxlDbKFDU+nkziHgkJB1E8TYWnCGwuWFaIj67FgaUQepCwN6+0e9IR1PB57KSs6vD42pCqLUlnUDhqI89mQgqWXjKbrTWDDNM7nc8UqU/7FyW1aoTMsMabisdAEq2jYKWH1UlYbD7ZWVjFbfXWnYIn3GJdWOAQs04GgTln7seFGZTU7kfo/ohF5vedmfRiQ7SCy9pKVPyzHyJRKnBiWqKzMR4ysKO9kyhKrmJcHOygry43SRV35C22F/W1I6SJlSPHKlCUW+IltmPmOUlbKkFKEtWaNa0OrgyhdMLBMNcu34fjDMpUtJlVqn0xKc8MyNUQqVX4T/dHM0YN9lKWszZo8m90Ku8FaGTG1mSelv05Ob0PHri/uMLoNRV7imXtdTsFS1iz3u1cILD7KFRaVs1hoVv/yh6w5YG28rKxJitfD7S1idGWtgqKUpVGE5imYbyvsA8sl239N8cXL3YY/XWy4/I3qAq9kPYcNNQ1R8zSdUZa4Q8RjyChYYqyMNFbQDPG0fD+weGWlisOkqinMjY+jnZVFwcoWUtDTcp6XeyvsBotJNVtI5dzslf0QNqRqVkaHEQjz97iT2ZAPl3FQRpmBzmwS9EYuEFaDd4ifDiuTUt0mER6MheXy7q+uqUW0wt0qK8iGh9BfZuP/BaU43uNx2WR0ZVXUDhdFxDWWWFjWuIvzuxCfAJZLYQ5qheGwrA2xOL8L8QmUFeflHcJyOZrNakOX0E0EQ+9Y4bBM0W9X1gfBKtZm0w5xHmwBSy8WCsp23HNcd3Y28LsOgAVYgAVYgIUBWIAFWIAFWICFAViABViABViAhQFYgAVYgDXT+BVgAL9pjPIm/25KAAAAAElFTkSuQmCC",
    X: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAw1JREFUeNrsnOFxwjAMhUs3YAVWyAqswAqswAowAowAI5ARyAgwAoyQ6o67tlcgfonxk+M+/ezFufhDkp8su5O2bT9kmH0KgWAJlmAJlmAJlhAIlmAJlmAJlmAJgWAJlmAJlmAJlhAIlmAJlmD9WNM0E8B2u91b3rPZbBJOpk1vVVUFP2OxWHS/ZLVaIdO5Xq/pJsKAtd1ukXmez+eOl8xms+Ablstl0okwYJlNp9PgVNfr9avhp9MJwW2PlQDLQASnatH6ari5TMzwkcGyEIuJRMQxLdgLgWVmKTw4YcvijwP3+31woNEkTIGns5BQOhwOj3+s6/otLx+HdOi1oh2PxwEx2L2Sjs+z7lHW17lMrN5ut+4h8/kc+RlG5lmmGINu8if7IJnOkhrn+6mwQBHwPXmDG3zYfIr28exCulckPs33PqmdH4Z3sxQDlnj4k2WGIaibTGEiOjZ1MegPC9EQVrsgFdKjzigQFgICAUr+bB9YyDKXQzGYBSxQQ3TLMWZq95EOv7dGI4cjZdDopUOv7WbfYjAXz4rRk7xiMB/PAncUckjtzgm+V8/GqxjMKAyHRSK1GMwqDMFNGPfUnoVn9fUUe9gnteusw/jCsG8O4gv3XFZDsJ8INq4LhzVgaXOUDp6wkP5FVqLUM8Ejba5XA/9dgo8RAeQ9UmfPMu+4XC6DhyONn3I8K2Z/xkvK+3hWXddN08T75r/wLKQeRBr9ZIHqAAsRogYCOYlK1hAOsBAhajIdUWFkgcqGBQrRe3whWJkagg0Laa9+N+UNBLIfXywsRIj+1gR9ny9HOiBC9E/nBonEtFdQvKTDgDOl4NLJ0RA8WEgCerq6IaKMs8nFg4WcTHuqmxDBxdEQGd2w6Dj4n8kNC1KCR3JwR8MViUTGPgRHiEYm6UxuhX1yFEPkEaKqqpCVNPk+BMGz3nKfBJH+qQVqcljIWha889vCJyuTaojksIZdborZBUs3l0mrf0Stsw6CJViCJViCJRMswRIswRIswZIJlmAJlmAJlmDJBEuwBEuwirQvAQYAv7Sbyd6gtrAAAAAASUVORK5CYII=",
    Y: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAlVJREFUeNrsmn+NwkAQheEcgASQABKwgAWQgAUsYAEkgASQABJAQm8SLk1DSPd1e/ur+ebf42a7X+a9nel2XFXViNDiBwTAAhawgAUsYIEAWMACFrCABSwQAAtYwAIWsIAFAmABC1jA+ovX6zWdTseuWC6XSrbtdutMZcvZoqH2UwWOzWajPMb9fnemmkwmzjy2XLi9BId1vV4VWPv9vj3P4XBQ8thyBcOyWCwWzk3OZrP2JOv12pnEFgq6kRiw+heFiVTJYAsVD6u/3ZhInf9uS4TeRaTWQbH50+nk8adOS+R+GnbS0fF49D4ilPO0jMoy/16tVs6fXS4Xv7Iy+7clBlJZus0/n08Pv/takqUavL7tjxPNKPRvOwqToe7BH0r8KswE1h5ZhrrN11ZtkvRT7hAqy/SiNOK1o4sdg6Lu8ipL9KB6alEO0KDDYEqDf4dyxhsCRbOhh8GUMuzUzefStTdiHP87+MfjMZ/Pne72/mX7MCieAKV6lv6+xRm73S7yY6eBdT6f+8OKMAxmAUu0+fZhMP4zJ7vd6enN/yLkAgy+efHj3dyKw8BA7g3tLPMursgdQ+LTsKfNRxsGczF4b5sPejOYqcF7CyqZBtPK8P0SptM7g8jDYF6VZaQ6NQEpyyph61DH7XYTPwxJMAxm0jo0laXc7ycvq1Em32eJSlTeBQ4fVikBLGABC1jAAhYBLGABC1jAAhYBLGABC1jAAhYBLGABK3mkv2SlsoAFLBAAC1jAAhawgAUCYAELWMACFrBAACxgAQtYwAIWCIAVJH4FGABxraQlqLjfogAAAABJRU5ErkJggg==",
    Z: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAe5JREFUeNrs3NFtwkAQhGFAaYAWoARacAtugRbcApQALVAC1wIl4BLsEpxVnvIQRUMkbsfxv8+GXD6G9bGHWE/TtKK02kAAFlhggQUWWBCABRZYYIEFFgRggQUWWGCBBQFYYIEF1s9VSlm/oc7nM8nibQgWWBRYYIEFFlgLqY+af2y73TZNI148juPj8RCfttI/MLnW8XhU1r/b7aotyRTr+XyKL/blclk6lmGsTLGGYTCMVZTj3fB6vYp9vW3bqiszjJV4dzudTpXXtjGMVWwalFiJfe3fJss5VnbJEmMVlRArt487YmsPqXq7ds+3YewDxDXHljVlhUZYscMUY5W1whWxmh+WGKvYhSYu0qLBl1L6vre9CXo1eHHIFZflrjMf636/i69rXLl0rLnEKr9nla8SW/vSDyxut5s45Etu7ekN3nN2bNqzPGfHjlizi1Vmgxe/rpcwO3brWfqRRMqQzytZ+pGExU0wMVnms2OvZJnPjo2Spccqccjnkiw9Vl3X2R3/Mjs23ZTOYnb8S62nir/Mtt/vlYloNLXD4fDSM8d989WH/KHqffNPnx1HUxPnNt8fsrhDVvMCCyywwAILLAossN5TVT/ukCywKLDAAgsssMCiwAILLLDAAosCCyywwAILLAossOrVpwADALAUjuHbFyikAAAAAElFTkSuQmCC",
    "!": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAT9JREFUeNrs3MGRgkAUBFDHMgFSIAVSIGuIiRRY7xY4lrs1PezrMwfrVfP5oFj2fb9JXe4IYMGCBQsWLASwYMGCBQsWAliwYMGCBQsBLFiwYH2WdV1LRZ6HwdIsWLAEFixYsGDBEliwYMG6YkrIr5VLKW+P2bZtGAbNutUotJUKwpqm6csDNCuoVj01a55nWEHF6QZrHEcz69ewEqpXct4KO1+1Ej5n0AZ/cqKFTLQgrBORhIHVTbPeTjTNgmVmNV8s/t3qcLI9NH84k9isIxGnYe3YSriFTsQKmU0dY2lW9IpwlEfazHrtUU6ziv+iudpSCgvWpZMy4GteCHiO/7aXy56+vl+Wpe2V0WkICxYsWLAEFixYsGC5kf7TdPEMUrNgwYIFC5bAggULFixYAgsWLFiwYAksWLBg9ZQfAQYAy984l3UoS88AAAAASUVORK5CYII=",
    "?": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAldJREFUeNrsm+FtwkAMhaFigTBCGaErlBFYgRVYAUZIRoAR6AhkhDACjJBaiURRFBo3EJ97+d5PBNLl09l+9y5My7KcIJ3eQAAsYAELWMACFgiABSxgAQtYwAIBsIAFLGABC1ggANYgmrlazfV6zfP8/pP3SsD6UZZlX5UEVusXPip9VkqSJNhCy3C6XC7b7fZPDy9fXq/XRVEEWXAwWKfTqXd9CTKhPBZYaZo+XxNSkrI3I4f1ElK3XmbJa2Jffa/tuavVKlpYshdePqP2+32EsKQrDzHQZVBECGs4iyTVbbD+maXzfOQ5GzNOVLt55U9Eh8NhiAIPZkrFTHYuRgZlw7UqEQjfqMqwswZbH/h4PPppW0aw5IDSe6gpjb7BUxhFNOfzWeMwH+2aceVZjeDFOZR/HP5pBqLFKDTLs6S714agR/062pWlbylNf8NzDKSp5/fgpQAXi4WmDMWRGSSornuW0sGL3TXKmt0WoD7MMUuZ/cJSDjjLfNkprM1mo0xKR3Fh8Yvk3KO0IzbJjF9Y8vzKbm1jF/zC0mcyI7oKe7Kpi1cIsjxHsPRN3fi60B0sTeBVN/VQd/d2eVandrudsqmHTHKc7CwNgiBN3d1BWg6A8/m8M4RRlmrkB2lNYqVs/2NPSm92AViqndUvZR3pznJylwEsfxcWT15nhHzp9k6uM3hv4k8DwAIWDb7lLyhurVZ4WEJquVxqDvyUIT0LWAhYwAIWsIAFLAQsYA0jwj92FrCABSxgIWABC1jAAhawELCABSxgAQtYCFjAAhawgBWpvgUYAFJsN1opTo5xAAAAAElFTkSuQmCC",
    "0": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAlVJREFUeNrs2+1twjAQgGFSdQFWgBGyAiuwAoyQFWCEMAKMgEcII6QjwAjpiYgKkVAdwZyNee9H1c/IeeKPc+rLmqYZEbr4ggAssMACCyywIAALLLDAAgssCMACCyywwAILArDAAuuN4juGRhwOB+fczznk89PpdP3T2WzWfpxMJvP5PGRDm3BxPB5Xq5UQPNTgxWJR13WQBgfDEqbxeDz4GRdFIdbpY8lNSu94fkzkeW7sFQDL47wjE1nKWDL6/M65ZVmaNT6zPBgii910OvV7TZn4ZDAmmGet12vv15Q8Y7PZJIi12+1ecVnJ0VLLs7bbraY9Mv1XVdX+yX6/lyUvnrsYRTW1S4LazTM06ZiwGtyC3TDUDJZu/iVSkn9qNkxJzVk3O757eabym911NikszcPv3Sd+IpYmerGe2UL6DbukNMsyzaLm/W95+cebUrDAAosACyywwAILLAIssMACCyywCLDAAgsssMAiwALrNmz+a/0GWINPlLwxlubh9x4esTlOFBfW4MMwGqzUepam7KT3KK3mfO2jNS0pYDnnlsvl9WwlX2rOXtn0LLsjR/pD8DK7tTffrRC79xjqura4B8vyirYYznsURWHTftPU4UXVgl7KpqLrWa/oXGbdKkChk/Jcu37RsKyiC1BCV1WVFy+5yF8tRsqVrNIdnhyPslwaS4Us+5Uoy3JAfiRDz7LGMFi94b39oLvEP78mPTE/R8AC/PBYNy8YujtBAYqkbiAuLF7+gQUWARZYYIEFFlgEWGCBBRZYYBFggQUWWGB9ZPwKMAAb8Bq6GXjuvQAAAABJRU5ErkJggg==",
    "1": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAShJREFUeNrs3EENgzAUBuCxTAkW8IIFLCChWMACEsACFrCAhK7JDsuWMbjRkO8/kcCh+dLX93qhiDHe5FjuCGDBggULFiwEsGDBggULFgJYsGDBggULASxYsGBdM48M17Sua13XP1+FEKqqgvXOMAzTNG05KsOPdF3nzDoqtSwLrP30fd+2rW54aE81TaMb7m+onKvvfKxEM89z6nqp953b43LESjSv8yjRpGdD6c6ouTU9ue64G8ISWLBgGR2+U5ZlCOH/mJpG+ay1YjYZx3F3tembE1eoDJ1ZsGDBgiWwYMGCBQuWwIIFCxYsWAILFixYsGAJLFiwYMGCJbBgwYIF66Ip/IjazoIFCxYsWAhgwYIFCxYsBLBgwYIFCxYCWLBgwbpmngIMAPZUToFkzb9zAAAAAElFTkSuQmCC",
    "2": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAApZJREFUeNrs2+FtwkAMBWBSdQEYgYzAClkBRmAFVmCFMAKMACPACDACGSF9UiSEaKOY9LAd5/kHQlRCydecz3c+srquJwxZfJGAWMQiFrGIRSwSEItYxCIWsYhFAmIRi1jEIhaxSEAsYhFrQPHt4SKqqjqdTrfbDa94f7lcnv9aFMV0Ol0sFniDV8sLrU3jeDyu12v51c7n87Isra7WDOt+vy+Xy37/YJDt9/uxYJ3PZ4ysf46JzWYTHyuJVBMYwpGxrtdrKqkmNMejNhZmtLQTFOiR/nQuXrXOOhwOKA6Slx273S5g6ZD8sXo8XNGGIfK6MGcjrzXZbbvdChMc6rVQWLjzHrMbFCRY+PJQWJ1jsC1VS0p81LehEvzLiu93NGvAPz+XpPlQuw6d99O2SMbipvPLsQiPgyWpGNqwJDsNobA+On65+fdePtLZ5xoAlmSIpV1vBh+GOlhK28qY0TqL0rZZDytKJ8PQeFs5Sd2vttzJPP92B6k9z/POBN+U/mPPWavVSjIV9t7LjzMM5V2fZpcicncnlZTmNvxkuEldeU/ZI1ZZlj67Fe6w3pIaRd8wiVRRFCNq378EBpRcCvW6ZqryhfVWj9pKygUW7nwQUvZYuHP5GthWyh5LXnyaSxljyac/D1KWWPLjNE6kLLGEqcqPlBmWcPXnSsoGSzgAlRfJTrEke3WQQqXqbZGvjSU8FWN4ftsRluSUh86RGO9YksfKYap6hGrDQnL4EzW9Tse0R+i1wqqqms1mknKhH5YwGw6gIy1sLLs6M2PZN/Ss4A4r+Qn4yDkry7JPd4uDPFkBHqsJf/ZLLGIRi7MhnywGsYhFLGIRi1gMYhGLWMQiFrEYxCIWsYhFLGIxiEUsYjmIHwEGAH5cZJ2I3VOhAAAAAElFTkSuQmCC",
    "3": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwZJREFUeNrsm/1xwjAMxVuOBWCErsAKMEJWYAVWICOEEWAEGAFGgBFgBPqK2x7HRyxC8uw4T39wbY7kzO8kWXpyPs/n84fMZj0hECzBEizBEizBEgLBEizBEizBEiwhECzBEizBEizBEgLBEizBapH1Y1jE4XDYbDa73c798X99MBiMRqOvi2VZhs/ACz0HteVyOR6PjUsFrKIoAq42GKztdmvHdIMMiDsEaz6fvxkQs9msE7Cm02ktCYTP66OlpJyR45EKC+m53t0J+StNWMfjEaVA7bs5c3/kFaWLxeJ0OtX+2Ou6rGn7pJ3PGg6HXlgoQZG2nQOiQM3zHJ+WUjGponS9XntXAkYI1QqRi4cnFYZoZSylwA0a/IuL3hubiO7YG2nE4P1FS5VvCdXUYD3k8pCgJBrpWYJVTbFq7kZaqJJgWersyjUnTRSMPQy9sJyOKlg/1dlqtSr/TpZlXZGVy6VUSzLa7/e0JfVj8yZkdDgUog+Nt6Xop04xYnCi+0bHWPGT19mLJDe92t+BlKU5V1H6E30g1YSUWG79dmFC/whS1WZonfMsN7KmyQwxJvgKngL/ulEKu5LgK1ie55PJhCb7tV51wB5K5hUFLHdUphovuFjX2x30Ohb1ndzxxNsbOmSWYop26CFqWMaJP22IzxuyVjbLdNYoUaS/G1qqMM4Qn9TueFtld3z02V7plQCT2g29R/3gPiXnTi3epwr+1+kiWUkssMiNS7thWU6OCFabnI4Ey9L6PXOueIbSEcF6VitZ6gbSJkBrXLy/B0Dv9TzjVIJz+I8HyzI6RjRd8zJOJfCd1IasqBu9AYW0hU7Q9TfI68YtkjfBZ0oIDU2PUzuA66zed1H+HZY3GSPrU/Xu8chWzIMhbFj4bTVu8ym/6PSSWOz1Kf4rmmFk5TeFTdyLJ/CXHVKDL4ri1f0x7GvS4TV4FF+bi5X0gOM/C/sOQVwDi/v2EHTiEf9aMN2RniVYgiUTLMESLMESLMGSCZZgCZZgCZZgyQRLsARLsAQrdfsWYAB0oA7n6FfNZgAAAABJRU5ErkJggg==",
    "4": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAdxJREFUeNrs3N1tgzAUhuESdQFWgBFYAUZgBRiBrMAKrMAIsAIrMAKMQH3VRmpqfqTa5+D3XOQKkPXkMzomJtG2bR/UsXpAABZYYIEFFlgQgAUWWGCBBRYEYIEFFlhggQUBWGCBBdY961PmsJ7P5zRNu4cNw+ByVJHAH1nHcSyK4siRjgcvcRq2bcs962isTIGlO1bisCTHShyW5FjJwur7XnKsZLUOaZrO83zqlEBbh67rzkqFm6wLsQo0WSpiJSVZ12IVYrK0xMp/stZ1NbEyn9dODytZJlaXpTzU5q+WZYnj+K+BlWUpbfAPmbFKkqSqKpY7P3cry0qwaRrWhopj5Q3L9ArqYuUNy0ipi5UfLBMrMwfVxcoPlmUCSo6VByy9sfKApTdWrrFUx8o1Vl3XemPlFMv+M5f8WDldi+Z5bonV7+OPbPq450L6DrFy9uWcjVW4yZqm6Q6xcrOZzfIsNI5jk6y3lEc2s72eaC6VZZn6aehmf56Z6Xd+UqquwAILLLDAAoty0ZSadtGy3LG0srt96etl/70jlfmGxXd3vvueBW9YcM8CCywKLLDAAgus0Crij6hJFlhggQUWWBCABRZYYIEFFgRggQUWWGCBBQFYYIEF1j3rS4ABAJHuUWRFJlXUAAAAAElFTkSuQmCC",
    "5": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAntJREFUeNrsm9GVgjAQRWXPNmALWoItYAm2gCXQApaAJWAJUgKWgCVoCewc/FiPizi6MIRw36cH0Fwnk5eZEFRVNUM6fYEAWMACFrCABSwQAAtYwAIWsIAFAmABC1jAAhawQAAsYAELWH7q2/LLzufzdrvt9pmr1SpJEj9h5XnONCRnIWCNA9b1egXWGwkeWExDNKzPalcYhp+Z0inCOh6PTMNfnU4nchbWYQwJi9UQWFiHXh38uZZbU7UyVHvOul1TlmUcx4vFovGyzWaTpmk1kFyBlSTJ5XIRTJo/WFCKKZsurCiK3vXi9iHmCqzPZMwrsHzRKQiCbh84n8+LoniW4EZsHfpoVciWoPN2kc8+S/4Dsy2nD6Z0v99PFJakobCWfnE8HA6+mVJNuUrc1v0tkryFnWYUcqXBEOwi62VmEXf+YEoluLIsG2r1cHoaCqzGbZBmPtpUyuw20i9PcDyDIhBfRqXNgmgH65a2P7jRzHP6YB00Od4mZ5lud3rdJxkMhEopsIAFLGA1ab1eB63a7XbA0sr9frVDsJ65cA1Em7M0I8hZmq2Msjjhf2RpYPkWWS/HI9OtsWWtqe3Z7B8dgtXIRT5xJ7JM+4aazHJfLM2yTHOLhJWHTdYoipQ1mTAM9TMrjmMPYfV0arQsSw9hiTo/NiTR6mf7flafuloulx3WBSWsbEzWAD5LMlGapl09TbkCjHI1fDfTt8vzI0f3+s+7upM4zPagoijezfcy6W5nBAf5wcM3LCTli03Pa7UYdJGQbWzEmsmt7s7fE8oSSpavMo0JFsU/YAELAQtYwAIWsICFgAUsYAELWMBCwAIWsIAFrEnqR4ABAFakRVY8Sd/OAAAAAElFTkSuQmCC",
    "6": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAtlJREFUeNrsm+FxwjAMhZteF4ARYISswApZgRXMCKwQjxBGgBFgBDpCGIG+I3dcLw2tkiayIz/94E8L53wnK09Pdna/398YsngnAsIiLMIiLMIiLCIgLMIiLMIiLMIiAsIiLMIiLMIiLCIgLMIirBnFRwyLOBwOl0d8PuL7nzabTfO5WCzwuVqtQi70Hi7qut7v96AgX22e52VZhlpwMFjn83lwmuCLVVWlAgvZ8f894ZyzDws5NVYNwS62DAt1atwiDfRqi9eWDt771vvun7Hb7dQWnymfolkul7fbbdzfRHLhLWlNlCKtRifVyDSDCv50OkmU1PF4fL4KGlH6e0DNGhSlfy4GAvV6vba+JXkhWCvwkrQqiuInmu12G0ly6cGSPE9nnZYU7ylKYeyuQ+eOC9w8B3EdJNvwFaxITgnPILNSNP/GFe5BQk/BZ1kmUQDMLNrKE+9ZNDEtl3n1iE4tZk3BCxcDBf9ni4N/0HRmAvhZQjMvWucvOlh9A50QYfUIzclFXNJhQDRGRa95WrrSAS209z5FUTq4SUJyMbOkosyanyVPk7Isj4+QD/clloY1UQo0dV23JrISXjoaIq7MwjO30OR57pyLxdKIKrOec50B4/7kdNarxURi79CiSRKWwoDHDiwFqWUHloIjyALPAk9YCcGa9LyZNT9r0uexdvJPcixtsKOgMxyLK7M6ucQDS6+RlpiZRVEMOwre2YHP+xy85LG/TwNBSnLsDzlr8NKAcIbaXABrboIJXTCDsCYaK+jswQDXUSTbqu9L1uCQ9WmkrNfrEe0UZKvaoRrtdgdlaJT7c03gp1SPH833vqH+ldZgN1mrqhrcAOGLCd1k7SWjWpicc63ZotkC31nyvfeXywVtzavCj8KEtx66ZUh8HYMhsFMqBNey0oFGx1GYHyyaf4RFWAzCIizCIizCIiwGYREWYREWYREWg7AIi7AIi7CSjC8BBgDxhIHqgtCJ4AAAAABJRU5ErkJggg==",
    "7": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAh5JREFUeNrs21uRwkAQhWGg1gBIAAmxgAUsYAEkoAELWEBCIiErgZGQbS5VvHUGiu05Q/39nIXZr/o0MyFMh2GYUHk1gwAssMACCyywIAALLLDAAgssCMACCyywwAILArDAAgus76yfmLfpum6/3//TizdNczgcvgcrpXQ+n4khM4sCCyywwAKLTemnaz6fr9fr9/7291bOBcvlMua/mOo/+bdarXysvu9jvNRjaPt+X8oOOmGdNRm0yw+vpftyuYQtRrqzrKf8E+VutzOvuAUpt9V2u/UXH9lW1+EuK2UQvpRRBi9JN4bH49G/wDIYvSbZtvKHkQ3++FWJdtbpdEop+RmMX5XoptTfiN53DJwNH23lb0SLtJUo1uho32w2ZVamNtrbtvUX3DRNqbXNaKtaB7x9Ai4WC/+asHsM6jNrtK0sg6Wk6sMqmEEtrK7r/B3DfeMOVlZbWQAthmA99qLKGRTCGj0M3qc7WNfKecaGzqomgypYVWRQBSsng2U3DULHHTvi+J1V6gaWXGfZXnQ0gwptJYE1OtpFBpYEVs7AEsEqPLNy7slMbnco6aysDIoMrPJYNt1ryWB5rJyBFfrohyzW6CN9dNZrGQTr2Vk5lxHDmo6E1cRQp61KYqVbVTSwSmJlTnc664XpXvArVa0YgvXhksKq4OcodBZYYFFggQUWWGCBRYEFFlhggQUWBRZYYIEFFlgUWO/UnwADAKM+9iPbiqjtAAAAAElFTkSuQmCC",
    "8": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwRJREFUeNrsm+FxgkAQhTGTBmwhLWAJtGALWoIt2IKWoCVACVqClqAlkDc4kxhEboHL3rG8/eHEhGPIN7t7u2+PWVmWCU1mH0RAWIRFWIRFWIRFBIRFWIRFWIRFWERAWIRFWIRFWIRFBIRFWIQ1IvuM4SGu12tRFOfzGT/g836///zpq7I0TfGZZRk+Qz5oGdR2ux0QyJ8WF2NJqKcNBut0OnXC9GxwNCyfCix4x3w+HxgT+i6WBCHlK4co80r0o89vzs3z3CwspBu/sLA/2oTlMQCDBKNqUXo8HiWXIfdnlQmrqv1+b63Out1ukufZbrfPq/BVsgo3NxWGyMSSmvN14XK5jCTN64Uh+hjnNavVSvjLHje31kg31vS9C33jsN6V9ZHw+ojcrahnUfzzoWoR1m9f0huWc7Pz3kUFhiX5fxqhAOKzdjoJWA91uEfj4uxmULUOV8eik5UljXRNApXU/WoqzUz53Z3FYuFMQPCUhw8WlTkvPhwONgcWl8vFY8ggtHVa6GCyMgLNCy+QUh5bhBlYwB0G1uuIPk2fCjwKg0nkhEjmOoFhCVW9d/12TSM0CwvhI9HzIozERJ+Ux2obt7K8G/bOUy3+ZROWpHrELonL8sqQmCRFBq43CMspPLy6CaLMyQvBaA2WZHDfWGRKOko0BqamO84uDx7UmPuR5pzOJRzfjkaiccJq2SWdG6iOyhqRrNziPkNU1lHCGqJ2Bj5Kqg/rX4fGzhjnKGzCozDC+lOahx0dmfKslrwjqdGsjcJ6b//OnXSKsBp5gRQn0tKuRXJkVKkQ01QdJMFS09eFB5x1JEDVIet6vZa4Sach62OflQyuR+ZZ3l+vaHRGO7Kyl1FFLVuZ1eD9ju8T2+/uCJV4oW02G/tDVi8v8SiTCjmRhn/1jkcsVJvoxHLWAfmr6xjxMbjXPxISoM561+WgcG8vqVBJpZV530w7WXhYNTW11jMDkNJ50dHBovhHWIRFIyzCIizCIizCohEWYREWYREWYdEIi7AIi7AIa5L2LcAAzvxzglhLcPIAAAAASUVORK5CYII=",
    "9": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAuZJREFUeNrsm/2RgjAQxQ/nGrAFLYEWsARa0BK0BFvQErQEKEFKkBKwBO6N3nmMoKwaNx+8/YNxFDLhZ3b3ZZNEdV1/0WQ2IgLCIizCIizCIiwiICzCIizCIizCIgLCIizCIizCIiwiICzCIiyP7NuFTpxOpzzPi7PhM67NX5MkGY/HcRynaTqZTGx2tLZqWZYBgby3QLbZbGz11hqsqqqewnQz1o7H41BgHQ4HeNY7DoHH0Uj4sN4nZYuXBViIO6YCLpoKGdZ6vTaboNCgWucjzV00kAXT6RRXg23CGRHsjfi1W6J0u92aJXX5A9BsgAp+v99LRspVSSF+QyUYadYzUQphJekPZOoLCUFHdumNLExoJNmtPZTm87mRxn1yw7Ise+/p1PQSoS9p3CdYN9PjeyOrM4r1JjtJ4z7BkuTBe+GpN2yFNrIk7/OyXBoiLFZKWVZ2zxRifDiwjE+k6IYDgKUj0D2D5QgU+7Akq1idcccdzeEWrM6M5s5wcwtWZ3VQr1zlnRvOZrPrUIIDLhYLhwKZ5grYR1+kXTX0uPgXx7HlnQp+SQdJzZOw/mHprFmFAAuklsslYUkNsCSrW4T1a7vd7tk9WYOTDu1ND73xCzdctjJIXkRh6VB1r0NbgkKd52drCvfLpkh46zUhRFEk+dc/3WGbsJ7opRuwWPwjLMJ6nAoIyy15oXdooCiK1Wr1+B4IhfZru1Mp1YN1OUbRe0/7SwksnVnByClP6SwrS1ZPlebnqlujBUDbT0mqYDo7/1RhSZwFqr35iKQEBpoB7oMX1mfgU8nZhM6FZgOE9aEyvNqhJ+2qg3FBhAEY7HGULMvMwtI862ShnmVw2ULz4I4dWFVVGXHGm7wZ8knWN1cu1DKgE7BgyGIvuCRGpcLis3Nl5WZxufizB8oTiS9NU4uLQ86VlcuzWZknB1KDZ6WUsAiLRliERViERViERSMswiIswiIswqIRFmERFmERVtD2I8AAVk+r365MC5oAAAAASUVORK5CYII="
};

var canvasData = {};
var textBuffer = [];
var coordinateBuffer = [];
var dotsBuffer = [];
var dotsBreadpoint = [];
var dots = [];
var totalCoordinates = [];
var context, PI = Math.PI;
var strokeColor='#000',backgroundColor='#fff';
var processCount=0;
var colorChangeCount=0;

Array.prototype.forEachDo = function (callback) {
    for (var i = 0; i < this.length; i++) {
        callback.call(this[i]);
    }
};

function Char(char, option) {
    this.data = {};
    this.pixelData = {};
    this.coordinateArray = [];
    this.init = function () {
        this.data['char'] = char;
        Object.assign(this.data, option);
        this.constructPixelData();
        this.constructCoordinateArray();
        console.log(this.data.char, this.coordinateArray.length);

    };
    this.constructPixelData = function () {
        var fontSize = this.data.fontSize;
        var image = document.createElement('img');
        image.src = chars[this.data.char];
        context.clearRect(0, 0, fontSize, fontSize);
        context.drawImage(image, 0, 0, fontSize, fontSize);
        this.pixelData = context.getImageData(0, 0, fontSize, fontSize);
    };
    this.constructCoordinateArray = function () {
        this.coordinateArray = [];
        var pixelArray = this.pixelData.data;
        for (var x = 0; x < this.pixelData.width; x++) {
            for (var y = 0; y < this.pixelData.height; y++) {
                var i = (y * this.pixelData.width + x) * 4;
                if (pixelArray[i] < 128) {
                    this.coordinateArray.push({
                        x: x,
                        y: y
                    })
                }
            }
        }
    };
    this.getCoordinateArray = function () {
        return this.coordinateArray;
    };
    this.init();
}

function Dot(option) {
    this.multipleFactor = option.multipleFactor || 0.8;
    this.inPlace = false;
    //current coordinate
    this.x = option.x;
    this.y = option.y;
    //target coordinate
    this.tx = option.tx;
    this.ty = option.ty;
    //speed of the particle
    this.vx = Math.random() * this.multipleFactor;
    this.vy = Math.random() * this.multipleFactor;
}
Dot.prototype = {
    update: function () {
        if (!this.inPlace) {
            if (Math.abs(this.tx - this.x) < 0.5 && Math.abs(this.ty - this.y) < 0.5) {
                this.x = this.tx;
                this.y = this.ty;
                this.inPlace = true;
            }
            else {
                this.x = this.x + (this.tx - this.x) * this.vx;
                this.y = this.y + (this.ty - this.y) * this.vy;
            }
        } else {

        }
    },
    resetCoordinate: function (option) {
        this.inPlace=false;
        //target coordinate
        this.tx = option.tx;
        this.ty = option.ty;
        //speed of the particle
        this.multipleFactor = option.multipleFactor || this.multipleFactor;
        this.vx = Math.random() * this.multipleFactor;
        this.vy = Math.random() * this.multipleFactor;
    },
    paint: function () {
        context.beginPath();
        context.arc(this.x, this.y, 1, 0, 2 * PI);
        context.fill();
        context.closePath();
    }
};


function rioMotionText(content, option, canvas) {
    canvas.height = option.height;
    canvas.style.height = option.height + 'px';
    canvas.width = option.width;
    canvas.style.width = option.width + 'px';
    context = canvas.getContext('2d');

    var currentTextIndex = 0;
    var _this = this;
    this.option = option;

    this.init = function () {
        var charOption = {
            fontSize: option['fontSize'],
        };
        if (Object.prototype.toString.call(content) != '[object Array]') {
            content = ['MERRY', 'CHRISTMAS']
        }
        for (var i = 0; i < content.length; i++) {
            textBuffer[i] = [];
            textBuffer[i] = [];
            if (Object.prototype.toString.call(content) != '[object String]') {
                charArr = '!!!!!'
            }
            var charArr = content[i].split('');
            for (var j = 0; j < charArr.length; j++) {
                textBuffer[i][j] = new Char(charArr[j], charOption);
            }
        }
        window.requestAnimFrame =
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.ORequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function requestAnimFrame(callback) {
                setTimeOut(callback, 1000 / 60);
            };

    };

    this.start = function () {
        var duration = option.duration || 2000;
        this.recompute();
        this.textInterval = setInterval(function () {
            processCount=0;
           /* strokeColor='#000';
            backgroundColor='transparent';*/
            this.recompute();
        }.bind(this), duration);
        this.update();

    };

    this.recompute=function(){
        this.coordinateRecompute();
        this.dotsRecompute();
        currentTextIndex++;
        dotsBuffer=[];
        for(var i=0;i<dotsBreadpoint.length;i++){
            if(i<dotsBreadpoint.length-1){
                dotsBuffer[i]=dots.slice(dotsBreadpoint[i],dotsBreadpoint[i+1]);
            }
            else{
                dotsBuffer[i]=dots.slice(dotsBreadpoint[i]);
            }
        }
    };

    this.update = function () {
        processCount++;
        colorChangeCount++;
        if(Math.random()>0.7&&colorChangeCount>40){
            if(processCount/(_this.option.duration*(24+Math.round(Math.random()))/2000)>1.5+Math.random()){
                strokeColor='#fff';
                backgroundColor='#000';
                colorChangeCount=0;
            }
            else if(processCount>(_this.option.duration*(24+Math.round(Math.random()*6))/2000)){
                strokeColor='#000';
                backgroundColor='transparent';
                colorChangeCount=0;
            }
        }

        context.clearRect(0, 0, _this.option.width, _this.option.height);
        context.rect(0,0,_this.option.width, _this.option.height);
        context.fillStyle=backgroundColor;
        context.fill();
        context.fillStyle = strokeColor;
        context.strokeStyle = strokeColor;
        console.log(processCount/10)
        for(var charIndex=0;charIndex<dotsBuffer.length;charIndex++){
            var charDots=dotsBuffer[charIndex],i=0;
            if(processCount/5>charIndex){
                for (i = 0; i < charDots.length; i++) {
                    charDots[i].update();
                    charDots[i].paint();
                }
            }
            else{
                for (i = 0; i < charDots.length; i++) {
                    charDots[i].paint();
                }
            }
        }

        _this.particleLink();
        _this.requestId = requestAnimationFrame(_this.update)
    };

    this.particleLink=function(){
        for(var dotIndex=0;dotIndex<dotsBuffer.length;dotIndex++){
            var dotsGroup=dotsBuffer[dotIndex];
            for(var i=0;i<dotsGroup.length;i=i+4){
                for(var j=0;j<dotsGroup.length;j++){
                    var dot_1=dotsGroup[i];
                    var dot_2=dotsGroup[j];
                    if(!dot_1['inPlace']||!dot_2['inPlace']){
                        continue;
                    }
                    var dSquare=Math.pow((dotsGroup[i].x-dotsGroup[j].x),2)+Math.pow((dotsGroup[i].y-dotsGroup[j].y),2);
                    if(dSquare<49){
                        context.beginPath();
                        context.moveTo(dotsGroup[i].x,dotsGroup[i].y);
                        context.lineTo(dotsGroup[j].x,dotsGroup[j].y);
                        context.stroke();
                        context.closePath();
                    }
                }
            }
        }
    };

    this.coordinateRecompute=function(){
        if (currentTextIndex == textBuffer.length) {
            currentTextIndex = 0;
        }
        var currentTextArr = textBuffer[currentTextIndex];
        var offset_x, offset_y;
        offset_x = (this.option.width - this.option.fontSize * currentTextArr.length*0.5) / 2;
        offset_y = (this.option.height - this.option.fontSize) / 2;
        totalCoordinates = [];
        dotsBreadpoint[currentTextIndex]=[0];
        for (var charIndex = 0; charIndex < currentTextArr.length; charIndex++) {
            var totalArray = [], coordinateArray = [],i=0;
            totalArray = currentTextArr[charIndex].getCoordinateArray();
            //for ( i = 0; i < totalArray.length; i++) {
            for ( i = 0; i < totalArray.length; i = i +4+ Math.floor(4 * Math.random())) {
                var coordinate = {
                    x: totalArray[i].x + offset_x + (charIndex * this.option.fontSize)*0.5,
                    y: totalArray[i].y + offset_y
                };
                coordinateArray.push(coordinate);
                totalCoordinates.push(coordinate);
            }
            dotsBreadpoint[currentTextIndex].push(i);
        }
    };


    this.dotsRecompute = function () {
        var i = 0;
        var d = totalCoordinates.length - dots.length;
        if (d >= 0) {
            for (i = 0; i < dots.length; i++) {
                dots[i].resetCoordinate({
                    tx: totalCoordinates[i].x,
                    ty: totalCoordinates[i].y,
                    multipleFactor:  0.9
                });
            }
            var dotsLength = dots.length;
            for (i = 0; i < d; i++) {
                dots.push(new Dot({
                    x: this.option.width * Math.random(),
                    y: this.option.height * Math.random(),
                    tx: totalCoordinates[i + dotsLength].x,
                    ty: totalCoordinates[i + dotsLength].y,
                    multipleFactor:  0.9
                }));
            }
        }
        else {
            for (i = 0; i < totalCoordinates.length; i++) {
                dots[i].resetCoordinate({
                    tx: totalCoordinates[i].x,
                    ty: totalCoordinates[i].y,
                    multipleFactor: 0.9
                });
            }
            dots.splice(totalCoordinates.length, Math.abs(d));
        }

        console.log(dots.length);
    };
    this.init();
}

window.onload = function () {
    var canvas = document.getElementById('stage');
    var option = {
        fontSize: 90,
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
        duration: 3000
    };
    if(option.width<1024){
        canvas.style.zoom=option.width/1024;
    }
    var changer = new rioMotionText(['BEVERAGE','ASSOCIATION', 'OF','SCUT'], option, canvas);
    changer.start();
};