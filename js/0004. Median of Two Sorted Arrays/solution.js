const findMedianSortedArrays = (nums1, nums2) => {
  const len1 = nums1.length;
  const len2 = nums2.length;
  const nBeg = len1 + len2;

  let n = (nBeg >> 1) + 1;
  let i1 = 0;
  let i2 = 0;
  let a1 = 0;
  let a2 = 0;
  let ni1 = 0;
  let ni2 = 0;

  while (n--) {
    ni1 = nums1[i1];
    ni2 = nums2[i2];
    if (i2 === len2 || (i1 < len1 && ni1 < ni2)) {
      a2 = a1;
      a1 = ni1;
      i1 += 1;
    } else {
      a2 = a1;
      a1 = ni2;
      i2 += 1;
    }
  }
  return nBeg % 2 === 1 ? a1 : (a2 + a1) / 2;
};
