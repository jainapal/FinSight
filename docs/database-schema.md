# FinSight Database Schema

## Collections

### Users

```text
_id
name
email
password
avatar
provider
role
subscription
emailVerified
createdAt
updatedAt
```

---

### Reports

```text
_id
userId
title
company
financialYear
fileName
fileUrl
fileSize
pages
status
summary
processingProgress
createdAt
updatedAt
```

---

### ReportAnalysis

```text
_id
reportId
executiveSummary
keyTakeaways
financialRatios
redFlags
swot
embeddingsReady
createdAt
```

---

### Chats

```text
_id
userId
reportId
messages[]
createdAt
```

---

### Subscriptions

```text
_id
userId
plan
status
startDate
endDate
paymentProvider
subscriptionId
```

---

### Payments

```text
_id
userId
subscriptionId
amount
currency
status
provider
transactionId
createdAt
```