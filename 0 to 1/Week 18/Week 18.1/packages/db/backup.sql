--
-- PostgreSQL database dump
--

\restrict Vzarsb1cCjS2svGU5Cmeubo4FYFbAw3bPpUdT9wzM8vtBvvPsAger1OZeTXll7w

-- Dumped from database version 18.1 (Debian 18.1-1.pgdg13+2)
-- Dumped by pg_dump version 18.1 (Debian 18.1-1.pgdg13+2)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: AuthType; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public."AuthType" AS ENUM (
    'Google',
    'Github'
);


ALTER TYPE public."AuthType" OWNER TO postgres;

--
-- Name: OnRampStatus; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public."OnRampStatus" AS ENUM (
    'Success',
    'Failure',
    'Processing'
);


ALTER TYPE public."OnRampStatus" OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Balance; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Balance" (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    amount integer NOT NULL,
    locked integer NOT NULL
);


ALTER TABLE public."Balance" OWNER TO postgres;

--
-- Name: Balance_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Balance_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Balance_id_seq" OWNER TO postgres;

--
-- Name: Balance_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Balance_id_seq" OWNED BY public."Balance".id;


--
-- Name: Merchant; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Merchant" (
    id integer NOT NULL,
    email text NOT NULL,
    name text,
    auth_type public."AuthType" NOT NULL
);


ALTER TABLE public."Merchant" OWNER TO postgres;

--
-- Name: Merchant_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Merchant_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Merchant_id_seq" OWNER TO postgres;

--
-- Name: Merchant_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Merchant_id_seq" OWNED BY public."Merchant".id;


--
-- Name: OnRampTransaction; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."OnRampTransaction" (
    id integer NOT NULL,
    status public."OnRampStatus" NOT NULL,
    token text NOT NULL,
    provider text NOT NULL,
    amount integer NOT NULL,
    "startTime" timestamp(3) without time zone NOT NULL,
    "userId" integer NOT NULL
);


ALTER TABLE public."OnRampTransaction" OWNER TO postgres;

--
-- Name: OnRampTransaction_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."OnRampTransaction_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."OnRampTransaction_id_seq" OWNER TO postgres;

--
-- Name: OnRampTransaction_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."OnRampTransaction_id_seq" OWNED BY public."OnRampTransaction".id;


--
-- Name: User; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."User" (
    id integer NOT NULL,
    email text,
    name text,
    number text NOT NULL,
    password text NOT NULL
);


ALTER TABLE public."User" OWNER TO postgres;

--
-- Name: User_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."User_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."User_id_seq" OWNER TO postgres;

--
-- Name: User_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."User_id_seq" OWNED BY public."User".id;


--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- Name: Balance id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Balance" ALTER COLUMN id SET DEFAULT nextval('public."Balance_id_seq"'::regclass);


--
-- Name: Merchant id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Merchant" ALTER COLUMN id SET DEFAULT nextval('public."Merchant_id_seq"'::regclass);


--
-- Name: OnRampTransaction id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."OnRampTransaction" ALTER COLUMN id SET DEFAULT nextval('public."OnRampTransaction_id_seq"'::regclass);


--
-- Name: User id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User" ALTER COLUMN id SET DEFAULT nextval('public."User_id_seq"'::regclass);


--
-- Data for Name: Balance; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Balance" (id, "userId", amount, locked) FROM stdin;
2	2	40300000	0
1	1	74300000	0
\.


--
-- Data for Name: Merchant; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Merchant" (id, email, name, auth_type) FROM stdin;
\.


--
-- Data for Name: OnRampTransaction; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."OnRampTransaction" (id, status, token, provider, amount, "startTime", "userId") FROM stdin;
2	Processing	0.39192420348304036	HDFC Bank	0	2026-02-12 22:21:18.043	2
3	Success	0.7640955433825809	HDFC Bank	40000000	2026-02-12 22:40:41.103	2
1	Success	0.6627110440816415	HDFC Bank	300000	2026-02-12 22:16:54.648	2
4	Success	0.14575842434313802	HDFC Bank	69000000	2026-02-12 23:03:09.429	1
5	Success	0.4655463678653866	HDFC Bank	5000000	2026-02-12 23:04:26.008	1
\.


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."User" (id, email, name, number, password) FROM stdin;
1	\N	\N	6395646026	$2b$10$irRgsfY6a5pMYK35sWxtTOR9FLteguTZHTkTLna4.apujkn0K/HaO
2	\N	\N	1111111111	$2b$10$GMNi9jCUJ6ZBoSOgZYEube7lLY9MoY6p0By9L6ii1P7oEZbdiHraS
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
9f8201d3-c194-4ef9-b370-afdc5b823dbf	74321ef4af21dd277012df04272490dac49483b673162e05f491e8db020c4494	2026-02-12 22:14:10.042584+00	20240323121305_init	\N	\N	2026-02-12 22:14:10.030379+00	1
1dcc9ceb-66a3-44f4-8ed8-d273517642ec	66a15a95f2cd7f3b178965363d2f8e9df74528768c1dba1c4b2f4e187f807d1e	2026-02-12 22:14:10.05628+00	20240324100733_add_merchant	\N	\N	2026-02-12 22:14:10.045118+00	1
d54f0c31-f179-489a-89cd-20e92fb92752	208026b1ce6791599604881fae06f4ce49edc8d026e90bfe68f9e867c3e8faf4	2026-02-12 22:14:10.066478+00	20240324104524_add_merchant	\N	\N	2026-02-12 22:14:10.059169+00	1
6b813825-71b6-497b-b81b-0be905fb7221	17cf836ef957f26214536acc83ad6dc22666c98a57bfe9b8d40a225669786653	2026-02-12 22:14:10.079521+00	20240324105137_add_password	\N	\N	2026-02-12 22:14:10.068863+00	1
dbeb90ef-e2bc-46f1-9494-fbc2bae05cd7	afba61bc6992dacd22b7d652f8b8931e5f2538ed91238c17ff87f4163a6b1125	2026-02-12 22:14:10.095046+00	20240324145646_added_balances_and_onramp	\N	\N	2026-02-12 22:14:10.081913+00	1
\.


--
-- Name: Balance_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Balance_id_seq"', 5, true);


--
-- Name: Merchant_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Merchant_id_seq"', 1, false);


--
-- Name: OnRampTransaction_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."OnRampTransaction_id_seq"', 5, true);


--
-- Name: User_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."User_id_seq"', 2, true);


--
-- Name: Balance Balance_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Balance"
    ADD CONSTRAINT "Balance_pkey" PRIMARY KEY (id);


--
-- Name: Merchant Merchant_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Merchant"
    ADD CONSTRAINT "Merchant_pkey" PRIMARY KEY (id);


--
-- Name: OnRampTransaction OnRampTransaction_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."OnRampTransaction"
    ADD CONSTRAINT "OnRampTransaction_pkey" PRIMARY KEY (id);


--
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: Balance_userId_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Balance_userId_key" ON public."Balance" USING btree ("userId");


--
-- Name: Merchant_email_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Merchant_email_key" ON public."Merchant" USING btree (email);


--
-- Name: OnRampTransaction_token_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "OnRampTransaction_token_key" ON public."OnRampTransaction" USING btree (token);


--
-- Name: User_email_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "User_email_key" ON public."User" USING btree (email);


--
-- Name: User_number_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "User_number_key" ON public."User" USING btree (number);


--
-- Name: Balance Balance_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Balance"
    ADD CONSTRAINT "Balance_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: OnRampTransaction OnRampTransaction_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."OnRampTransaction"
    ADD CONSTRAINT "OnRampTransaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- PostgreSQL database dump complete
--

\unrestrict Vzarsb1cCjS2svGU5Cmeubo4FYFbAw3bPpUdT9wzM8vtBvvPsAger1OZeTXll7w

