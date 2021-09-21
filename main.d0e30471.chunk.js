(this["webpackJsonpcandy-machine-mint"] = this["webpackJsonpcandy-machine-mint"] || []).push([
    [0], { 216: function(e, t, n) { "use strict";
            (function(e) { n.d(t, "a", (function() { return l })), n.d(t, "b", (function() { return b })), n.d(t, "c", (function() { return O })); var r = n(2),
                    a = n.n(r),
                    c = n(7),
                    i = n(38),
                    s = n(80),
                    o = new i.d.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),
                    u = new i.d.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),
                    l = function() { var e = Object(c.a)(a.a.mark((function e(t, n, r) { var i, s, o, u, l, d = arguments; return a.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return i = d.length > 3 && void 0 !== d[3] ? d[3] : "recent", s = d.length > 4 && void 0 !== d[4] && d[4], o = !1, u = { slot: 0, confirmations: 0, err: null }, l = 0, e.next = 7, new Promise(function() { var e = Object(c.a)(a.a.mark((function e(d, b) { return a.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            setTimeout((function() { o || (o = !0, console.log("Rejecting for timeout..."), b({ timeout: !0 })) }), n); try { l = r.onSignature(t, (function(e, t) { o = !0, u = { err: e.err, slot: t.slot, confirmations: 0 }, e.err ? (console.log("Rejected via websocket", e.err), b(u)) : (console.log("Resolved via websocket", e), d(u)) }), i) } catch (f) { o = !0, console.error("WS error in setup", t, f) }
                                                        case 2:
                                                            if (o || !s) { e.next = 8; break } return Object(c.a)(a.a.mark((function e() { var n; return a.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                                                        case 0:
                                                                            return e.prev = 0, e.next = 3, r.getSignatureStatuses([t]);
                                                                        case 3:
                                                                            n = e.sent, u = n && n.value[0], o || (u ? u.err ? (console.log("REST error for", t, u), o = !0, b(u.err)) : u.confirmations ? (console.log("REST confirmation for", t, u), o = !0, d(u)) : console.log("REST no confirmations for", t, u) : console.log("REST null result for", t, u)), e.next = 11; break;
                                                                        case 8:
                                                                            e.prev = 8, e.t0 = e.catch(0), o || console.log("REST connection error: txid", t, e.t0);
                                                                        case 11:
                                                                        case "end":
                                                                            return e.stop() } }), e, null, [
                                                                    [0, 8]
                                                                ]) })))(), e.next = 6, h(2e3);
                                                        case 6:
                                                            e.next = 2; break;
                                                        case 8:
                                                        case "end":
                                                            return e.stop() } }), e) }))); return function(t, n) { return e.apply(this, arguments) } }());
                                    case 7:
                                        return u = e.sent, r._signatureSubscriptions[l] && r.removeSignatureListener(l), o = !0, console.log("Returning status", u), e.abrupt("return", u);
                                    case 12:
                                    case "end":
                                        return e.stop() } }), e) }))); return function(t, n, r) { return e.apply(this, arguments) } }(),
                    d = function(t, n, r, a) { var c = [{ pubkey: n, isSigner: !0, isWritable: !0 }, { pubkey: t, isSigner: !1, isWritable: !0 }, { pubkey: r, isSigner: !1, isWritable: !1 }, { pubkey: a, isSigner: !1, isWritable: !1 }, { pubkey: i.d.SystemProgram.programId, isSigner: !1, isWritable: !1 }, { pubkey: s.b, isSigner: !1, isWritable: !1 }, { pubkey: i.d.SYSVAR_RENT_PUBKEY, isSigner: !1, isWritable: !1 }]; return new i.d.TransactionInstruction({ keys: c, programId: o, data: e.from([]) }) },
                    b = function() { var e = Object(c.a)(a.a.mark((function e(t, n, r, c) { var s, o, u, l, d, b, p, m, j, O, h; return a.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return s = new i.b(c, n, { skipPreflight: !0, preflightCommitment: "recent" }), e.next = 3, i.a.fetchIdl(r, s);
                                    case 3:
                                        return o = e.sent, e.next = 6, f(t, r, t.toBase58().slice(0, 6));
                                    case 6:
                                        return u = e.sent, l = new i.a(o, r, s), d = { id: u, connection: c, program: l }, e.next = 11, l.account.candyMachine.fetch(d.id);
                                    case 11:
                                        return b = e.sent, p = b.data.itemsAvailable.toNumber(), m = b.itemsRedeemed.toNumber(), j = p - m, O = new Date("1970-01-01T00:00:00Z"), b.data.goLiveDate && (O = new Date(1e3 * b.data.goLiveDate.toNumber())), h = b.data.price, e.abrupt("return", { candyMachine: d, itemsAvailable: p, itemsRedeemed: m, itemsRemaining: j, goLiveDate: O, price: h });
                                    case 19:
                                    case "end":
                                        return e.stop() } }), e) }))); return function(t, n, r, a) { return e.apply(this, arguments) } }(),
                    f = function() { var t = Object(c.a)(a.a.mark((function t(n, r, c) { return a.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, i.d.PublicKey.findProgramAddress([e.from("candy_machine"), n.toBuffer(), e.from(c)], r);
                                    case 2:
                                        return t.abrupt("return", t.sent[0]);
                                    case 3:
                                    case "end":
                                        return t.stop() } }), t) }))); return function(e, n, r) { return t.apply(this, arguments) } }(),
                    p = function() { var t = Object(c.a)(a.a.mark((function t(n) { return a.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, i.d.PublicKey.findProgramAddress([e.from("metadata"), u.toBuffer(), n.toBuffer(), e.from("edition")], u);
                                    case 2:
                                        return t.abrupt("return", t.sent[0]);
                                    case 3:
                                    case "end":
                                        return t.stop() } }), t) }))); return function(e) { return t.apply(this, arguments) } }(),
                    m = function() { var t = Object(c.a)(a.a.mark((function t(n) { return a.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, i.d.PublicKey.findProgramAddress([e.from("metadata"), u.toBuffer(), n.toBuffer()], u);
                                    case 2:
                                        return t.abrupt("return", t.sent[0]);
                                    case 3:
                                    case "end":
                                        return t.stop() } }), t) }))); return function(e) { return t.apply(this, arguments) } }(),
                    j = function() { var e = Object(c.a)(a.a.mark((function e(t, n) { return a.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, i.d.PublicKey.findProgramAddress([t.toBuffer(), s.b.toBuffer(), n.toBuffer()], o);
                                    case 2:
                                        return e.abrupt("return", e.sent[0]);
                                    case 3:
                                    case "end":
                                        return e.stop() } }), e) }))); return function(t, n) { return e.apply(this, arguments) } }(),
                    O = function() { var e = Object(c.a)(a.a.mark((function e(t, n, r, c) { var o, l, b, f, O, h, g; return a.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return o = i.d.Keypair.generate(), e.next = 3, j(r, o.publicKey);
                                    case 3:
                                        return l = e.sent, b = t.connection, f = t.program, e.next = 7, m(o.publicKey);
                                    case 7:
                                        return O = e.sent, e.next = 10, p(o.publicKey);
                                    case 10:
                                        return h = e.sent, e.next = 13, b.getMinimumBalanceForRentExemption(s.a.span);
                                    case 13:
                                        return g = e.sent, e.next = 16, f.rpc.mintNft({ accounts: { config: n, candyMachine: t.id, payer: r, wallet: c, mint: o.publicKey, metadata: O, masterEdition: h, mintAuthority: r, updateAuthority: r, tokenMetadataProgram: u, tokenProgram: s.b, systemProgram: i.d.SystemProgram.programId, rent: i.d.SYSVAR_RENT_PUBKEY, clock: i.d.SYSVAR_CLOCK_PUBKEY }, signers: [o], instructions: [i.d.SystemProgram.createAccount({ fromPubkey: r, newAccountPubkey: o.publicKey, space: s.a.span, lamports: g, programId: s.b }), s.c.createInitMintInstruction(s.b, o.publicKey, 0, r, r), d(l, r, r, o.publicKey), s.c.createMintToInstruction(s.b, o.publicKey, l, r, [], 1)] });
                                    case 16:
                                        return e.abrupt("return", e.sent);
                                    case 17:
                                    case "end":
                                        return e.stop() } }), e) }))); return function(t, n, r, a) { return e.apply(this, arguments) } }(),
                    h = function(e) { return new Promise((function(t) { return setTimeout(t, e) })) } }).call(this, n(32).Buffer) }, 495: function(e, t, n) {}, 496: function(e, t, n) {}, 500: function(e, t) {}, 501: function(e, t) {}, 522: function(e, t) {}, 523: function(e, t) {}, 631: function(e, t) {}, 633: function(e, t) {}, 648: function(e, t) {}, 651: function(e, t) {}, 653: function(e, t) {}, 663: function(e, t) {}, 665: function(e, t) {}, 692: function(e, t) {}, 694: function(e, t) {}, 695: function(e, t) {}, 700: function(e, t) {}, 702: function(e, t) {}, 721: function(e, t) {}, 733: function(e, t) {}, 736: function(e, t) {}, 748: function(e, t) {}, 755: function(e, t, n) { "use strict";
            n.r(t); var r, a, c, i, s = n(0),
                o = n.n(s),
                u = n(28),
                l = n.n(u),
                d = (n(495), n(496), n(19)),
                b = n(2),
                f = n.n(b),
                p = n(7),
                m = n(20),
                j = n(169),
                O = n(170),
                h = n(471),
                g = n(774),
                x = n(775),
                v = n(776),
                y = n(777),
                w = n(38),
                k = n(96),
                S = n(206),
                T = n(54),
                P = n(216),
                M = n(29),
                K = Object(O.a)(S.WalletDialogButton)(r || (r = Object(j.a)([""]))),
                W = O.a.span(a || (a = Object(j.a)([""]))),
                A = O.a.div(c || (c = Object(j.a)([""]))),
                R = Object(O.a)(g.a)(i || (i = Object(j.a)([""]))),
                L = function(e) { e.days; var t = e.hours,
                        n = e.minutes,
                        r = e.seconds;
                    e.completed; return Object(M.jsxs)(W, { children: [t < 10 ? "0" + t : t, ":", n < 10 ? "0" + n : n, ":", r < 10 ? "0" + r : r] }) },
                D = function(e) { var t = Object(s.useState)(!0),
                        n = Object(m.a)(t, 2),
                        r = n[0],
                        a = n[1],
                        c = Object(s.useState)(!1),
                        i = Object(m.a)(c, 2),
                        o = i[0],
                        u = i[1],
                        l = Object(s.useState)(!1),
                        b = Object(m.a)(l, 2),
                        j = b[0],
                        O = b[1],
                        g = Object(s.useState)(!1),
                        S = Object(m.a)(g, 2),
                        W = S[0],
                        D = S[1],
                        E = Object(s.useState)({ hasTriedToMint: !1, wasSuccess: !1 }),
                        I = Object(m.a)(E, 2),
                        B = I[0],
                        C = I[1],
                        N = Object(s.useState)({ open: !1, message: "", severity: void 0 }),
                        U = Object(m.a)(N, 2),
                        _ = U[0],
                        Y = U[1],
                        q = Object(s.useState)(new Date(e.startDate)),
                        z = Object(m.a)(q, 2),
                        F = z[0],
                        Q = z[1],
                        V = Object(s.useState)(0),
                        G = Object(m.a)(V, 2),
                        X = G[0],
                        H = G[1],
                        J = Object(s.useState)(0),
                        Z = Object(m.a)(J, 2),
                        $ = Z[0],
                        ee = Z[1],
                        te = Object(s.useState)(0),
                        ne = Object(m.a)(te, 2),
                        re = ne[0],
                        ae = ne[1],
                        ce = Object(k.useWallet)(),
                        ie = Object(s.useState)(),
                        se = Object(m.a)(ie, 2),
                        oe = se[0],
                        ue = se[1],
                        le = function() { var t = Object(p.a)(f.a.mark((function t() { var n, r, a, c, i; return f.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (D(!0), n = void 0, t.prev = 2, !(ce.connected && (null === oe || void 0 === oe ? void 0 : oe.program) && ce.publicKey)) { t.next = 16; break } return t.next = 6, Object(P.c)(oe, e.config, ce.publicKey, e.treasury);
                                        case 6:
                                            return n = t.sent, r = "", e.network == T.WalletAdapterNetwork.Testnet ? r = "?cluster=testnet" : e.network == T.WalletAdapterNetwork.Devnet && (r = "?cluster=devnet"), a = "https://explorer.solana.com/tx/" + n + r, t.next = 12, Object(P.a)(n, e.txTimeout, e.connection, "singleGossip", !1);
                                        case 12:
                                            c = t.sent, C({ hasTriedToMint: !0, wasSuccess: !(null === c || void 0 === c ? void 0 : c.err), transactionId: B.transactionId, transactionLink: a }), (null === c || void 0 === c ? void 0 : c.err) ? Y({ open: !0, message: "We were unable to mint the token, please try again!", severity: "error" }) : Y({ open: !0, message: "Your token has successfully been minted!", severity: "success" }), de();
                                        case 16:
                                            t.next = 25; break;
                                        case 18:
                                            t.prev = 18, t.t0 = t.catch(2), console.log(t.t0), i = t.t0.msg || "We were unable to mint the token, please try again!", t.t0.msg ? 311 === t.t0.code ? (i = "SOLD OUT!", O(!0)) : 312 === t.t0.code && (i = "The minting period hasn't started yet!") : t.t0.message.indexOf("0x138") || (t.t0.message.indexOf("0x137") ? i = "SOLD OUT!" : t.t0.message.indexOf("0x135") && (i = "Insufficient funds to mint - please fund your wallet!")), C({ hasTriedToMint: !0, wasSuccess: !1, transactionId: n, transactionLink: B.transactionLink, message: i }), Y({ open: !0, message: i, severity: "error" });
                                        case 25:
                                            return t.prev = 25, D(!1), t.finish(25);
                                        case 28:
                                        case "end":
                                            return t.stop() } }), t, null, [
                                    [2, 18, 25, 28]
                                ]) }))); return function() { return t.apply(this, arguments) } }(),
                        de = function() { var t = Object(p.a)(f.a.mark((function t() { var n, r, c, i, s, o, u; return f.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (a(!0), ce && ce.publicKey && ce.signAllTransactions && ce.signTransaction) { t.next = 4; break } return a(!1), t.abrupt("return");
                                        case 4:
                                            return n = { publicKey: ce.publicKey, signAllTransactions: ce.signAllTransactions, signTransaction: ce.signTransaction }, t.next = 7, Object(P.b)(e.config, n, e.candyMachineId, e.connection);
                                        case 7:
                                            r = t.sent, c = r.candyMachine, i = r.goLiveDate, s = r.itemsRemaining, o = r.itemsAvailable, u = r.price, O(0 === s), Q(i), ue(c), ae(u), H(o), ee(s), a(!1);
                                        case 20:
                                        case "end":
                                            return t.stop() } }), t) }))); return function() { return t.apply(this, arguments) } }(); return Object(s.useEffect)((function() { de() }), [ce, e.candyMachineId, e.connection]), Object(M.jsxs)("main", { ref: function(e) { window.home = e }, children: [B.transactionLink && Object(M.jsx)("a", { href: B.transactionLink, className: "mint-transaction-link", target: "_blank", children: "View Transaction" }), Object(M.jsxs)(A, { className: "mint-core", children: [r ? Object(M.jsx)(R, { disabled: !0, variant: "contained", children: Object(M.jsx)(x.a, {}) }) : ce.connected ? Object(M.jsx)(R, { disabled: j || W || !o, onClick: le, variant: "contained", children: B.hasTriedToMint ? B.wasSuccess ? Object(M.jsxs)("span", { children: [Object(M.jsx)("span", { children: "SUCCESS!" }), Object(M.jsx)("small", { children: "Minted One Token" })] }) : Object(M.jsxs)("span", { children: [Object(M.jsx)("span", { children: "FAILED!" }), Object(M.jsx)("small", { children: B.message })] }) : j ? "SOLD OUT" : o ? W ? Object(M.jsxs)("span", { children: [Object(M.jsx)(x.a, {}), Object(M.jsx)("span", { children: "Processing..." })] }) : Object(M.jsxs)("span", { children: [Object(M.jsxs)("span", { children: ["MINT FOR ", re / w.d.LAMPORTS_PER_SOL, " SOL"] }), Object(M.jsxs)("small", { children: ["Sold: ", X - $, "/", X] })] }) : Object(M.jsx)(h.a, { date: F, onMount: function(e) { return e.completed && u(!0) }, onComplete: function() { return u(!0) }, renderer: L }) }) : Object(M.jsx)(K, { children: "Connect Wallet" }), B.hasTriedToMint && Object(M.jsx)(R, { className: "btn-refresh", onClick: function() { C({ hasTriedToMint: !1, wasSuccess: !1 }) }, children: Object(M.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", children: Object(M.jsx)("path", { d: "M13.5 2c-5.621 0-10.211 4.443-10.475 10h-3.025l5 6.625 5-6.625h-2.975c.257-3.351 3.06-6 6.475-6 3.584 0 6.5 2.916 6.5 6.5s-2.916 6.5-6.5 6.5c-1.863 0-3.542-.793-4.728-2.053l-2.427 3.216c1.877 1.754 4.389 2.837 7.155 2.837 5.79 0 10.5-4.71 10.5-10.5s-4.71-10.5-10.5-10.5z" }) }) })] }), Object(M.jsx)(v.a, { open: _.open, autoHideDuration: 6e3, onClose: function() { return Y(Object(d.a)(Object(d.a)({}, _), {}, { open: !1 })) }, children: Object(M.jsx)(y.a, { onClose: function() { return Y(Object(d.a)(Object(d.a)({}, _), {}, { open: !1 })) }, severity: _.severity, children: _.message }) })] }) },
                E = n(217),
                I = new w.d.PublicKey("7cSycnDQjX7oRnLB2MeoVfuDfz8ab4wpmocoE8UCwmUM"),
                B = new w.d.PublicKey("DazwNj5gmZGQzewWiiKNvqdWCFQNEXUzbjXf7oToUCWP"),
                C = new w.d.PublicKey("HQrA2MLAppm1EFyatNBCr4LRjPDXnLe16MifkFqiEjbQ"),
                N = "https://lokidfxnwlabdq.main.genesysgo.net:8899/",
                U = new w.d.Connection(N),
                _ = parseInt("1631580900000", 10),
                Y = function() { var e = Object(s.useMemo)((function() { return N }), []),
                        t = Object(s.useMemo)((function() { return [Object(E.getPhantomWallet)(), Object(E.getSolflareWallet)(), Object(E.getSolletWallet)()] }), []); return Object(M.jsx)(k.ConnectionProvider, { endpoint: e, children: Object(M.jsx)(k.WalletProvider, { wallets: t, autoConnect: !0, children: Object(M.jsx)(S.WalletDialogProvider, { featuredWallets: 5, children: Object(M.jsx)(D, { candyMachineId: C, config: B, network: "mainnet", connection: U, startDate: _, treasury: I, txTimeout: 6e4 }) }) }) }) };
            l.a.render(Object(M.jsx)(o.a.StrictMode, { children: Object(M.jsx)(Y, {}) }), document.getElementById("root")) } },
    [
        [755, 1, 2]
    ]
]);